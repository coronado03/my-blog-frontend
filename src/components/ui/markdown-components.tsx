import React from "react";
import type { Components } from "react-markdown";

export const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-foreground leading-tight mb-5 tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-foreground mb-4 mt-8 flex items-center gap-2.5">
      <span className="text-catppuccin-blue">##</span>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-bold text-foreground mb-3 mt-6 flex items-center gap-2">
      <span className="text-catppuccin-mauve">###</span>
      {children}
    </h3>
  ),
  p: ({ children }) => {
    const childArray = React.Children.toArray(children);
    const isImageOnly =
      childArray.length === 1 &&
      React.isValidElement<{ src?: string }>(childArray[0]) &&
      childArray[0].props.src !== undefined;

    if (isImageOnly) return <>{children}</>;

    return (
      <p className="text-sm leading-relaxed text-terminal-light mb-6">{children}</p>
    );
  },
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-catppuccin-sapphire border-b border-catppuccin-sapphire hover:text-catppuccin-blue hover:border-catppuccin-blue transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <div className="border-l-[3px] border-catppuccin-mauve bg-card px-6 py-4 mb-6 [&>p]:mb-0">
      <div className="italic text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  ),
  code: ({ children, className }) => {
    const isBlock = Boolean(className?.includes("language-"));
    if (isBlock) {
      return (
        <pre className="bg-terminal-dark border border-muted px-5 py-4 mb-6 overflow-x-auto">
          <code className="text-xs text-catppuccin-green leading-relaxed">{children}</code>
        </pre>
      );
    }
    return (
      <code className="text-catppuccin-peach bg-terminal-dark px-1.5 py-0.5 text-xs">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <>{children}</>,
  ul: ({ children }) => (
    <ul className="text-sm text-terminal-light mb-6 space-y-1.5 ml-4">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="text-sm text-terminal-light mb-6 space-y-1.5 ml-4">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2">
      <span className="text-catppuccin-blue mt-0.5 shrink-0">-</span>
      <span>{children}</span>
    </li>
  ),
  hr: () => <hr className="border-t border-muted my-8" />,
  strong: ({ children }) => (
    <strong className="text-catppuccin-yellow font-bold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-catppuccin-flamingo italic">{children}</em>
  ),
  img: ({ src, alt }) => (
    <span className="border border-muted mb-6 bg-terminal-dark overflow-hidden block">
      <img src={src} alt={alt} className="w-full h-auto" />
      {alt && (
        <span className="text-center text-[11px] text-terminal-gray py-2 px-4 border-t border-muted tracking-wide block">
          {alt}
        </span>
      )}
    </span>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border border-muted">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-card text-catppuccin-blue border-b border-muted">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-muted last:border-0 hover:bg-card transition-colors">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-bold tracking-wide text-[11px] uppercase">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-terminal-light">{children}</td>
  ),
};
