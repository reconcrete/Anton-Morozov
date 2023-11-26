import { VirtualComputer } from "@components/VirtualComputer";
import { Introduction } from "@components/Introduction";
import { MusicPlayer } from "@components/MusicPlayer";
import { DesktopOnly } from "@components/DesktopOnly";

export default function Home() {
  return (
    <main className="flex h-[calc(100dvh-83px)] items-center justify-around pb-32">
      <MusicPlayer />
      <Introduction />

      <DesktopOnly>
        <VirtualComputer />
      </DesktopOnly>
    </main>
  );
}
