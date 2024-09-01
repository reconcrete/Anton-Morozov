import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, experimental_StreamData } from "ai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";

import { functionDeclarations, runFunction } from "./functions";
import { systemPrompt } from "./constants";
import { StreamMetadata } from "./util";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages }: { messages: Array<ChatCompletionMessageParam> } = await req.json();

  const lastUserMessage = messages[messages.length - 1];

  if (process.env.NODE_ENV === 'development') {
    const response = `Hello, I am a bot. I am still in development. Please come back later.`;
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(response);
        controller.close();
      },
    });
    return new StreamingTextResponse(stream);
  }

  const openAiResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    stream: true,
    temperature: 0.4,
    functions: functionDeclarations,
    messages: [systemPrompt, lastUserMessage],
    max_tokens: 300,
  });

  const streamMetadata = new StreamMetadata<AiCommand>();

  let functionResponse: AiCommand | undefined;
  const stream = OpenAIStream(openAiResponse, {
    experimental_onFunctionCall: async ({ name, arguments: args }) => {
      functionResponse = runFunction(name, args as Record<string, string>);
      return functionResponse.text;
    },
    onFinal: () => {
      streamMetadata.appendValue(functionResponse);
      streamMetadata.close();
    },
    experimental_streamData: true,
  });

  return new StreamingTextResponse(stream, {}, streamMetadata);
}
