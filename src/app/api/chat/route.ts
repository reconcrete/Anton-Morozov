import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse, experimental_StreamData } from "ai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";
import { systemPrompt } from "./constants";
import { functions, runFunction } from "./functions";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  console.log("Request received");
  const { messages }: { messages: Array<ChatCompletionMessageParam> } = await req.json();

  const lastUserMessage = messages[messages.length - 1];

  if (process.env.VERCEL_ENV !== "preview" && process.env.VERCEL_ENV !== "production") {
    const response = `Hello, I am a bot. I am still in development. Please come back later.`;
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(response);
        controller.close();
      },
    });
    return new StreamingTextResponse(stream);
  }

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    stream: true,
    temperature: 0.4,
    functions: functions,
    messages: [systemPrompt, lastUserMessage],
  });

  const streamMetadata = new experimental_StreamData();

  const stream = OpenAIStream(response, {
    experimental_onFunctionCall: async ({ name, arguments: args }) => {
      const functionResponse = runFunction(name, args as Record<string, string>);
      streamMetadata.append({
        name: functionResponse.name,
        args: functionResponse.args,
      });

      return functionResponse.text;
    },
    onFinal: () => {
      streamMetadata.close();
    },
    experimental_streamData: true,
  });

  return new StreamingTextResponse(stream, {}, streamMetadata);
}
