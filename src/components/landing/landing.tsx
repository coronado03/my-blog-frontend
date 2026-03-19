import { getAllArticles } from '../utils/get-articles';
import ArticleTable from './article-table';

const Landing = () => {
  const files = getAllArticles();
  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground font-mono p-4 lg:p-6">
      <div className="mb-4">
        <div className="flex items-center gap-1 lg:gap-2 flex-wrap text-sm lg:text-base">
          <span className="text-catppuccin-blue">coronado@blog</span>
          <span className="text-catppuccin-red">:</span>
          <span className="text-catppuccin-teal">~/articles</span>
          <span className="text-foreground">$</span>
          <span className="text-catppuccin-yellow">ls -lh</span>
        </div>
        <p className="text-muted-foreground mt-2 text-sm lg:text-base">total 328K</p>
      </div>
      <ArticleTable files={files} />
    </div>
  );
};

export default Landing;
