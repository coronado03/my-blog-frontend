import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "../../types/article";

export function getAllArticles(): Article[] {
  const articlesDirectory = path.join(process.cwd(), "src/content/articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles: Article[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const fileSize = fs.statSync(fullPath).size;
    const formattedFileSize = `${(fileSize / 1000)}K`;
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags,
      slug: data.slug ?? slug,
      published: data.published,
      size: formattedFileSize,
      content,
      type: data.type ?? 'article',
      week: data.week,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
