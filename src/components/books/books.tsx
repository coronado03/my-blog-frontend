type Book = {
  title: string;
  author: string;
  progress: number;
  status: 'Reading' | 'Done' | 'Queue';
  year: number;
}

export default function Books() {
  const books: Book[] = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      progress: 55,
      status: "Reading",
      year: 2017
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      progress: 100,
      status: "Done",
      year: 2019
    },
    {
      title: "Site Reliability Engineering",
      author: "Niall Richard Murphy",
      progress: 15,
      status: "Reading",
      year: 2016
    },
    {
      title: "Rust in Action",
      author: "Tim McNamara",
      progress: 80,
      status: "Reading",
      year: 2021
    },
    {
      title: "Distributed Systems with Go",
      author: "Travis Jeffery",
      progress: 0,
      status: "Queue",
      year: 2021
    }
  ];

  const getProgressBar = (progress: number) => {
    const filled = Math.round(progress / 5);
    const empty = 20 - filled;
    return {
      filled: '#'.repeat(filled),
      empty: '-'.repeat(empty)
    };
  };

  const getStatusColor = (status: Book['status']) => {
    switch(status) {
      case 'Done':
        return 'border-[var(--color-catppuccin-green)] text-[var(--color-catppuccin-green)]';
      case 'Reading':
        return 'border-[var(--color-catppuccin-yellow)] text-[var(--color-catppuccin-yellow)]';
      case 'Queue':
        return 'border-[var(--color-terminal-gray)] text-[var(--color-terminal-gray)]';
      default:
        return 'border-[var(--color-terminal-gray)] text-[var(--color-terminal-gray)]';
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[var(--color-background)] text-[var(--color-foreground)] font-mono">
      <main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border border-[var(--color-border)] p-4 bg-black/10">
          <div className="space-y-1">
            <div className="text-xs uppercase opacity-50 font-bold">TOTAL_READING</div>
            <div className="text-2xl text-[var(--color-catppuccin-mauve)]">08 <span className="text-sm opacity-50">Books</span></div>
          </div>
          <div className="space-y-1">
            <div className="text-xs uppercase opacity-50 font-bold">COMPLETED_YTD</div>
            <div className="text-2xl text-[var(--color-catppuccin-green)]">14 <span className="text-sm opacity-50">Books</span></div>
          </div>
          <div className="space-y-1">
            <div className="text-xs uppercase opacity-50 font-bold">TARGET_2026</div>
            <div className="text-2xl text-[var(--color-catppuccin-yellow)]">24 <span className="text-sm opacity-50">/ 50 (48%)</span></div>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <span className="text-[var(--color-catppuccin-mauve)]">➜</span>
          <h1 className="text-xl font-bold uppercase tracking-widest border-r-4 border-[var(--color-catppuccin-sky)] pr-2 animate-pulse">
            Current Reading List
          </h1>
        </div>

        <div className="overflow-x-auto border border-[var(--color-border)]/40">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[var(--color-muted)] text-xs uppercase opacity-70 border-b border-[var(--color-border)]">
              <tr>
                <th className="p-4 font-medium">Title &amp; Author</th>
                <th className="p-4 font-medium">Progress Monitor</th>
                <th className="p-4 font-medium w-32">Status</th>
                <th className="p-4 font-medium w-24">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]/20">
              {books.map((book, index) => {
                const progressBar = getProgressBar(book.progress);
                return (
                  <tr key={index} className="hover:bg-[var(--color-catppuccin-sky)]/5 transition-colors group">
                    <td className="p-4">
                      <div className="font-bold group-hover:text-[var(--color-catppuccin-sky)] transition-colors">
                        {book.title}
                      </div>
                      <div className="text-xs opacity-60">{book.author}</div>
                    </td>
                    <td className="p-4 font-mono">
                      <div className="flex items-center gap-3">
                        <div className="text-[var(--color-catppuccin-green)] tracking-tighter">
                          [<span className="text-[var(--color-catppuccin-green)]">{progressBar.filled}</span>
                          <span className="opacity-30">{progressBar.empty}</span>]
                        </div>
                        <span className="text-xs">{book.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] px-2 py-0.5 border ${getStatusColor(book.status)} uppercase`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm opacity-60 italic">{book.year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase opacity-50 tracking-widest font-bold">
            <span className="w-8 h-px bg-[var(--color-terminal-gray)]"></span>
            <span>System_Logs (Recent Learnings)</span>
          </div>
          <div className="bg-black/20 p-4 border-l-2 border-[var(--color-catppuccin-sky)] text-sm space-y-2 opacity-80">
            <p>
              <span className="text-[var(--color-catppuccin-mauve)]">[INFO]</span> Successfully implemented Raft consensus algorithm from DDIA Chapter 7.
            </p>
            <p>
              <span className="text-[var(--color-catppuccin-mauve)]">[INFO]</span> Learned about memory safety vs ownership patterns in Rust.
            </p>
            <p>
              <span className="text-[var(--color-catppuccin-red)]">[WARN]</span> Backlog growing: 12 books pending prioritization.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
