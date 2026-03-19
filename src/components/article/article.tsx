import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getArticle } from "../utils/get-article";
import { markdownComponents } from "../ui/markdown-components";

type ArticleProps = {
  fileName: string;
};

export default function Article({ fileName }: ArticleProps) {
  const article = getArticle(fileName);
  const articleReadingTime = Math.floor(article.content.length / 200);
  const NewLineCount = (article.content.match(/\n/g) || []).length + 13;
  const lineNums = Array.from({ length: NewLineCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-mono text-sm">
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden sm:flex w-12 shrink-0 py-3 bg-background border-r border-muted flex-col items-end pr-2.5">
          {lineNums.map((n) => (
            <div key={n} className="text-[11px] text-muted leading-[22px] min-h-[22px] select-none">
              {String(n).padStart(2, "0")}
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto py-3 pb-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 border border-muted bg-card px-5 py-3.5 mb-8">
              <div>
                <div className="text-[10px] text-terminal-gray tracking-[1.5px] uppercase mb-1">Reading Time</div>
                <div className="text-xs text-catppuccin-blue font-medium">{`${articleReadingTime} min read`}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-gray tracking-[1.5px] uppercase mb-1">Last Modified</div>
                <div className="text-xs text-catppuccin-blue font-medium">{article.date ?? "—"}</div>
              </div>
              <div>
                <div className="text-[10px] text-terminal-gray tracking-[1.5px] uppercase mb-1">Tags</div>
                <div className="flex gap-2 flex-wrap">
                  {(article.tags ?? []).map((t: string) => (
                    <span key={t} className="text-xs text-catppuccin-mauve">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <ReactMarkdown components={markdownComponents}>
              {article.content}
            </ReactMarkdown>
            <Link href="/">
              <button className="group mt-8 flex items-center gap-2 text-terminal-gray hover:text-catppuccin-mauve transition-colors duration-150">
                <span className="border border-muted group-hover:border-catppuccin-mauve px-2 py-0.5 text-xs transition-colors duration-150 text-catppuccin-blue group-hover:text-catppuccin-mauve">
                  :q
                </span>
                <span className="text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-150 italic">
                  quit buffer
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
