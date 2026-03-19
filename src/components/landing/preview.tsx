import { Article } from '../../types/article';
import { IoIosCalendar } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { BsFillTagsFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "../ui/markdown-components";

interface ArticlePreviewProps {
  date: Article['date'];
  content: Article['content'];
  tags: Article['tags'];
  title: Article['title'];
}

export default function ArticlePreview({ date, content, tags, title }: ArticlePreviewProps) {
  return (
    <div className="w-full lg:w-[500px] border border-border rounded-lg bg-card overflow-hidden">
      <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">PREVIEW_MODE</span>
        <span className="text-xs text-catppuccin-yellow">UTF-8</span>
      </div>
      <div className="flex flex-col h-[500px] lg:h-[650px]">
        <div className="p-4 pb-0 text-sm flex-shrink-0">
          <h1 className="text-catppuccin-mauve text-lg lg:text-xl font-bold mb-2">{title}</h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-terminal-gray mb-4">
            <span className="flex items-center gap-1">
              <span className="text-catppuccin-blue"><IoIosCalendar /></span>
              {date.toString()}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-catppuccin-red"><IoPerson /></span>
              coronado
            </span>
            <span className="flex items-center gap-1 flex-wrap">
              <span className="text-catppuccin-green"><BsFillTagsFill /></span>
              {tags.map((tag, i) => <span key={i}>{tag}</span>)}
            </span>
          </div>
        </div>
        <div className="flex-1 min-h-0 px-4 text-sm overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [--webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
          <ReactMarkdown components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </div>
        <div className="px-4 pb-4 pt-2 flex-shrink-0">
          <p className="text-terminal-gray text-xs border-t border-border pt-2">
            -- End of preview --
          </p>
        </div>
      </div>
    </div>
  );
}
