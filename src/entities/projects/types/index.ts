export type Project = {
  id: number;
  iconSvg: React.ReactNode;
  name: string;
  description: string;
  longDescription: string;
  technologies: Array<string>;
  url: string;
  codeUrl?: string;
};
