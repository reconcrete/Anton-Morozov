import { VirtualComputer } from "@components/VirtualComputer";
import { Introduction } from "@components/Introduction";
import { MusicPlayer } from "../components/MusicPlayer";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-around pb-32">
      <MusicPlayer />
      <Introduction />
      <VirtualComputer />
    </main>
  );
}
