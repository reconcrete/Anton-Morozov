import { BackgroundShape } from "@/src/widgets/backgroundShape";
import { Introduction } from "@widgets/introduction";
import { MusicPlayer } from "@widgets/musicPlayer";
import dynamic from "next/dynamic";

export default function Home() {
  const VirtualComputer = dynamic(() => import("@widgets/virtualComputer"), {
    ssr: false,
    loading: () => <div className="h-[500px] w-[478px]"></div>,
  });

  return (
    <main className="relative flex h-[calc(100dvh-90px)] items-center justify-around pb-32">
      <MusicPlayer />
      <Introduction />

      <VirtualComputer />

      <BackgroundShape />
    </main>
  );
}
