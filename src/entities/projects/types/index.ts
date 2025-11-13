export type Project = {
  id: number;
  iconSvg: React.ReactNode;
  name: string;
  type: "my-stuff" | "involved-in";
  description: string;
  url: string;
  codeUrl?: string;
  blogPostUrl?: string;
};
