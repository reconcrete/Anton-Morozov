export type Project = {
  id: number;
  iconSvg: React.ReactNode;
  name: string;
  description: string;
  longDescription: string;
  url: string;
  codeUrl?: string;
};
