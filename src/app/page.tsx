import { Introduction } from "@components/Introduction";
import { MusicPlayer } from "@components/MusicPlayer";
import dynamic from "next/dynamic";

export default function Home() {
  const VirtualComputer = dynamic(() => import("@components/VirtualComputer"), {
    ssr: false,
    loading: () => <div className="h-[500px] w-[478px]"></div>,
  });

  return (
    <main className="flex h-[calc(100dvh-90px)] items-center justify-around pb-32">
      <MusicPlayer />
      <Introduction />

      <VirtualComputer />
    </main>
  );
}
