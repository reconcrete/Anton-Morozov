import clsx from "clsx";
import { useChat } from "ai/react";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";
import { useMusic } from "@/src/entities/music/model";

const geekyFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const WELCOME_TEXT = `Welcome to my website! If you have any questions, feel free to ask them right here. Just press the button and start typing!`;
let prevMetadataLength = 0;

export const Chat = () => {
  const [isAnswerScreen, setIsAnswerScreen] = useState(true);
  const { messages, input, data, setInput, append, setMessages } = useChat({
    initialMessages: [
      {
        id: String(Math.random()),
        role: "assistant",
        content: WELCOME_TEXT,
      },
    ],
  });

  const setCurrentSong = useMusic((state) => state.setCurrentSong);

  useEffect(() => {
    const mainKeyListener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (isAnswerScreen) {
          setInput("");
          setIsAnswerScreen(false);
          return;
        }

        if (input === "") return;

        append({
          id: String(Math.random()),
          role: "user",
          content: input,
        });
        setMessages([]);
        setInput("");
        setIsAnswerScreen(true);
      } else if (e.key === "Backspace") {
        if (e.metaKey) {
          setInput("");
          return;
        }

        setInput((text) => text.slice(0, -1));
      } else if (
        e.key === "Shift" ||
        e.key === "Alt" ||
        e.key === "Control" ||
        e.key === "Meta" ||
        e.key === "Tab" ||
        e.key === "CapsLock" ||
        e.key === "Escape" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        // do nothing
      } else if (e.key === " ") {
        setInput((text) => text + " ");
        e.preventDefault();
      } else {
        setInput((text) => text + e.key);
      }
    };

    addEventListener("keydown", mainKeyListener);

    return () => {
      removeEventListener("keydown", mainKeyListener);
    };
  }, [input]);

  useEffect(() => {
    if (data && data.length > prevMetadataLength) {
      prevMetadataLength = data.length;

      const lastFunctionCall = data[data.length - 1] as { name: string; args: Record<string, string> | undefined };

      switch (lastFunctionCall.name) {
        case "playMusic":
          if (lastFunctionCall.args?.group) {
            setCurrentSong(lastFunctionCall.args.group);
          }
      }
    }
  }, [data]);

  const openUserScreen = () => {
    setInput("");
    setIsAnswerScreen(false);
  };

  const lastAssistantMessage = messages
    .slice()
    .reverse()
    .find((message) => message.role === "assistant");

  if (!lastAssistantMessage) return <ChatWrapper>Loading...</ChatWrapper>;

  return isAnswerScreen ? (
    <>
      <ChatWrapper>{lastAssistantMessage.content}</ChatWrapper>

      <button onClick={openUserScreen} className="mt-4 rounded-md bg-white px-2 py-1 text-black">
        {messages.length === 1 ? "Start" : "Ask more"}
      </button>
    </>
  ) : (
    <ChatWrapper>{input}</ChatWrapper>
  );
};

function ChatWrapper({ children }: { children: React.ReactNode }) {
  return (
    <p className={clsx(geekyFont.className, "text-[12px]")}>
      <span className="text-white">&gt; </span>
      {children}
      <span className="animate-pulse text-white">_</span>
    </p>
  );
}
