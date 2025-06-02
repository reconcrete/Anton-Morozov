import { Chat } from "../Chat/Chat";

export const Monitor = () => {
  return (
    <div
      className="absolute bottom-[190px] left-[75px] h-[250px] w-[400px] rounded-[36px] border-[1px] border-black p-3.5 text-[14px] text-white dark:border-white"
      style={{ transform: "skewY(10.5deg) rotateY(-1.5deg)" }}
    >
      <div className="h-full w-full overflow-auto rounded-[24px] border-[1px] border-black p-5 dark:border-white">
        <Chat />
      </div>
    </div>
  );
};
