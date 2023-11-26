export const functions = [
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
];

export function runFunction(
  name: string,
  args: Record<string, string>,
): { name: string; args: Record<string, string>; text: string } {
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
