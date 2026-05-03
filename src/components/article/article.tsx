import Link from "next/link";
import React from "react";
import { getArticle } from "../utils/get-article";

type ArticleProps = {
  fileName: string;
};

type ParsedLine =
  | { kind: "blank" }
  | { kind: "h1"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; text: string; indent: number }
  | { kind: "blockquote"; text: string }
  | { kind: "hr" }
  | { kind: "code-fence"; lang: string }
  | { kind: "code-content"; text: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "text"; text: string };

function parseLines(content: string): ParsedLine[] {
  const rawLines = content.split("\n");
  const result: ParsedLine[] = [];
  let inCode = false;

  for (const line of rawLines) {
    if (!inCode && line.startsWith("```")) {
      inCode = true;
      result.push({ kind: "code-fence", lang: line.slice(3).trim() });
    } else if (inCode && line.startsWith("```")) {
      inCode = false;
      result.push({ kind: "code-fence", lang: "" });
    } else if (inCode) {
      result.push({ kind: "code-content", text: line });
    } else if (line.trim() === "") {
      result.push({ kind: "blank" });
    } else if (line.startsWith("### ")) {
      result.push({ kind: "h3", text: line.slice(4) });
    } else if (line.startsWith("## ")) {
      result.push({ kind: "h2", text: line.slice(3) });
    } else if (line.startsWith("# ")) {
      result.push({ kind: "h1", text: line.slice(2) });
    } else if (/^(\s*)([-*+]) /.test(line)) {
      const m = line.match(/^(\s*)([-*+]) (.*)$/);
      result.push({ kind: "list", text: m?.[3] ?? "", indent: Math.floor((m?.[1]?.length ?? 0) / 2) });
    } else if (line.startsWith("> ")) {
      result.push({ kind: "blockquote", text: line.slice(2) });
    } else if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      result.push({ kind: "hr" });
    } else {
      const imgMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        result.push({ kind: "image", src: imgMatch[2], alt: imgMatch[1] });
      } else {
        result.push({ kind: "text", text: line });
      }
    }
  }

  return result;
}

function parseInline(text: string): React.ReactNode {
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={key++} className="text-catppuccin-yellow font-bold">{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      nodes.push(<em key={key++} className="text-catppuccin-flamingo italic">{match[2]}</em>);
    } else if (match[3] !== undefined) {
      nodes.push(<code key={key++} className="text-catppuccin-peach bg-terminal-dark px-1.5 py-0.5 text-xs">{match[3]}</code>);
    } else if (match[4] !== undefined) {
      nodes.push(<a key={key++} href={match[5]} className="text-catppuccin-sapphire border-b border-catppuccin-sapphire hover:text-catppuccin-blue transition-colors">{match[4]}</a>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  if (nodes.length === 0) return null;
  if (nodes.length === 1) return nodes[0];
  return <>{nodes}</>;
}

function LineContent({ line }: { line: ParsedLine }) {
  switch (line.kind) {
    case "blank":
      return <div className="h-[22px]" />;
    case "h1":
      return <div className="text-2xl font-bold text-foreground py-1">{parseInline(line.text)}</div>;
    case "h2":
      return (
        <div className="text-xl font-bold text-foreground py-1 flex items-center gap-2">
          <span className="text-catppuccin-blue">##</span>
          {parseInline(line.text)}
        </div>
      );
    case "h3":
      return (
        <div className="text-lg font-bold text-foreground py-0.5 flex items-center gap-2">
          <span className="text-catppuccin-mauve">###</span>
          {parseInline(line.text)}
        </div>
      );
    case "list":
      return (
        <div className="flex items-start gap-2 leading-[22px]" style={{ paddingLeft: `${line.indent * 16}px` }}>
          <span className="text-catppuccin-blue shrink-0">-</span>
          <span className="text-terminal-light">{parseInline(line.text)}</span>
        </div>
      );
    case "blockquote":
      return (
        <div className="border-l-[3px] border-catppuccin-mauve pl-4 leading-[22px] italic text-muted-foreground">
          {parseInline(line.text)}
        </div>
      );
    case "hr":
      return <div className="border-t border-muted h-[22px] flex items-center" />;
    case "code-fence":
      return (
        <div className="text-catppuccin-blue leading-[22px]">
          {"```"}
          {line.lang && <span className="text-catppuccin-mauve ml-0.5">{line.lang}</span>}
        </div>
      );
    case "code-content":
      return (
        <div className="text-catppuccin-green leading-[22px] bg-terminal-dark pl-2">
          {line.text || "\u00A0"}
        </div>
      );
    case "image":
      return (
        <div className="border border-muted bg-terminal-dark overflow-hidden">
          <img src={line.src} alt={line.alt} className="w-full h-auto" />
          {line.alt && (
            <div className="text-center text-[11px] text-terminal-gray py-2 px-4 border-t border-muted tracking-wide">
              {line.alt}
            </div>
          )}
        </div>
      );
    case "text":
      return <div className="text-terminal-light leading-[22px]">{parseInline(line.text)}</div>;
  }
}

export default function Article({ fileName }: ArticleProps) {
  const article = getArticle(fileName);
  const wordCount = article.content.trim().split(/\s+/).length;
  const articleReadingTime = Math.max(1, Math.ceil(wordCount / 200));
  const parsedLines = parseLines(article.content);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-mono text-sm">
      <div className="flex-1">

        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 border border-muted bg-card px-5 py-3.5">
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
        </div>

        {parsedLines.map((line, i) => (
          <div key={i} className="relative">
            <div className="hidden sm:block absolute left-2 top-0 text-[11px] text-muted select-none leading-[22px] pt-0.5">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-8">
              <LineContent line={line} />
            </div>
          </div>
        ))}

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-8 pb-10">
            <Link href="/">
              <button className="group flex items-center gap-2 text-terminal-gray hover:text-catppuccin-mauve transition-colors duration-150">
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
  );
}
