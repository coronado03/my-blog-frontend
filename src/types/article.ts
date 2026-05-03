
export type Article = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  type?: "article" | "log";
  slug: string;
  published: boolean;
  size: string;
  content: string;
};
