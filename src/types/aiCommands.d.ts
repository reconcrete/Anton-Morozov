// Central place to define all AI commands between server and client
type AiCommands = PlayMusicAiCommand | StopMusicAiCommand;
type AiCommandNames = PlayMusicAiCommandName | StopMusicAiCommandName;

type AiCommand = {
  text: string;
  name: string;
  args: Record<string, string>;
};

type PlayMusicAiCommandName = "playMusic";
type PlayMusicAiCommand = {
  name: PlayMusicAiCommandName;
  args: {
    group: string;
  };
};

type StopMusicAiCommandName = "stopMusic";
type StopMusicAiCommand = {
  name: StopMusicAiCommandName;
  args: {};
};
