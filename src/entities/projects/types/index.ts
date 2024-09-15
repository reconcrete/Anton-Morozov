export type Project = {
  id: number;
  iconSvg: React.ReactNode;
  name: string;
  description: string;
  url: string;
  codeUrl?: string;
  blogPostUrl?: string;
};
