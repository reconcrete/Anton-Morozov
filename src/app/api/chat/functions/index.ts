import { OpenAiFunctionDeclaration } from "../types";

export const functionDeclarations: Array<OpenAiFunctionDeclaration> = [
  {
    name: "playMusic",
    description: "This will play music of given group",
    parameters: {
      type: "object",
      properties: {
        group: {
          type: "string",
          description: 'Name of the group. The default value is "Coldplay"',
        },
      },
      required: ["group"],
    },
  },
  {
    name: "stopMusic",
    description: "Call this to stop playing music",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  },
];

export function runFunction(name: string, args: Record<string, string>): AiCommand {
  try {
    switch (name) {
      case "playMusic":
        if (typeof args.group !== "string") {
          name = "Coldplay";
        }

        return {
          name,
          args,
          text: `Playing music of ${args.group}`,
        };

      case "stopMusic":
        return {
          name,
          args,
          text: "Stopping music",
        };
      default:
        return {
          name: "",
          args: {},
          text: `Function ${name} not found`,
        };
    }
  } catch (error) {
    console.log(`Caught error in function ${name}: ${error}`);

    return {
      name: "",
      args: {},
      text: (error as { message: string }).message ?? "Something went wrong",
    };
  }
}
