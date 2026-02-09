import Article from '@/components/article/article';

type ArticlePageProps = {
  params: {
    id: string
  };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  return <Article id={params.id} />;
}
