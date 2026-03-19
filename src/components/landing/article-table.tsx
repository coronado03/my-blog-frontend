'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Article } from '../../types/article';
import ArticlePreview from './preview';

const ArticleTable = ({ files }: { files: Article[] }) => {
  const router = useRouter();
  const [previewed, setPreviewed] = useState<Article>(files[0]);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleRowClick = (file: Article) => {
    if (window.innerWidth < 1024) {
      setPreviewed(file);
      setPreviewOpen(true);
    } else {
      router.push(`/article/${file.slug}`);
    }
  };

  return (
    <div className="relative">
      <div className="hidden lg:grid grid-cols-[1fr_auto] gap-6">
        <div className="overflow-x-auto border border-border rounded-lg bg-card p-4 min-h-[700px]">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="text-terminal-gray border-b border-muted">
                <th className="text-left pb-2 pr-4 font-normal">Mode</th>
                <th className="text-left pb-2 pr-4 font-normal">Links</th>
                <th className="text-left pb-2 pr-4 font-normal">User:Group</th>
                <th className="text-left pb-2 pr-4 font-normal">Size</th>
                <th className="text-left pb-2 pr-4 font-normal">Date</th>
                <th className="text-left pb-2 font-normal">Name</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, idx) => (
                <tr
                  key={idx}
                  onClick={() => router.push(`/article/${file.slug}`)}
                  onMouseEnter={() => setPreviewed(file)}
                  className="border-b border-muted last:border-0 hover:bg-muted transition-colors cursor-pointer"
                >
                  <td className="py-2 pr-4 text-catppuccin-mauve">-rw-r--r--</td>
                  <td className="py-2 pr-4 text-catppuccin-yellow">1</td>
                  <td className="py-2 pr-4">
                    <span className="text-catppuccin-blue">coronado@blog</span>
                  </td>
                  <td className="py-2 pr-4 text-catppuccin-peach">{file.size}</td>
                  <td className="py-2 pr-4">
                    <span className="text-catppuccin-green">{file.date}</span>
                  </td>
                  <td className="py-2">
                    {file.slug}.md
                    <span className={`ml-2 text-xs text-catppuccin-red border border-catppuccin-red px-1.5 py-0.5 rounded ${file.slug === previewed.slug ? 'visible' : 'invisible'}`}>
                      ACTIVE
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ArticlePreview
          date={previewed.date}
          content={previewed.content}
          tags={previewed.tags}
          title={previewed.title}
        />
      </div>

      <div className="lg:hidden border border-border rounded-lg bg-card overflow-hidden">
        <div className="divide-y divide-muted">
          {files.map((file, idx) => (
            <div
              key={idx}
              onClick={() => handleRowClick(file)}
              className="flex items-start gap-3 p-4 hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium truncate">{file.slug}.md</span>
                  <span className="text-xs text-catppuccin-mauve shrink-0">-rw-r--r--</span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs flex-wrap">
                  <span className="text-catppuccin-green">{file.date}</span>
                  <span className="text-catppuccin-peach">{file.size}</span>
                  <span className="text-catppuccin-blue">coronado@blog</span>
                </div>
                {file.tags && file.tags.length > 0 && (
                  <div className="flex gap-1 mt-1.5 flex-wrap">
                    {file.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs text-terminal-gray border border-muted px-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-catppuccin-yellow text-xs shrink-0 mt-1">→</span>
            </div>
          ))}
        </div>
      </div>

      {previewOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-card border-b border-border">
            <span className="text-sm text-terminal-gray">{previewed.slug}.md</span>
            <div className="flex gap-3">
              <button
                onClick={() => router.push(`/article/${previewed.slug}`)}
                className="text-xs text-catppuccin-blue border border-catppuccin-blue px-2 py-1 rounded hover:bg-catppuccin-blue/10 transition-colors"
              >
                READ
              </button>
              <button
                onClick={() => setPreviewOpen(false)}
                className="text-xs text-catppuccin-red border border-catppuccin-red px-2 py-1 rounded hover:bg-catppuccin-red/10 transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
          <div className="p-4">
            <ArticlePreview
              date={previewed.date}
              content={previewed.content}
              tags={previewed.tags}
              title={previewed.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleTable;
