import Article from '@/components/article/article';

export default async function ArticlePage({ params }) {
  return <Article id={params.id} />;
}
