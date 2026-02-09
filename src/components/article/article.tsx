import Link from 'next/link';

type ArticleProps = {
  id: string;
};

export default async function Article({ id }: ArticleProps) {
  const article = await fetch('http://localhost:3001/article/2', {
  next: { revalidate: 60 },
  });

  if (!article.ok) {
    throw new Error('Failed to fetch article');
  }

  const articleData = await article.json();

  console.log(articleData);
return (
  <div>
      <h1>{articleData.title}</h1>
      <p>{articleData.content}</p>
      <Link href="/">

      <button>Go back to Blog</button>
      </Link>
  </div>
)
}
