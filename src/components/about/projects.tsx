import { VscGithub } from "react-icons/vsc";

type ProjectPropsType = {
  title: string;
  version?: string;
  paragraph: string;
  tags: string[];
  github: string;
};

const Project = ({ title, version, paragraph, tags, github }: ProjectPropsType) => {
  return (
    <div className="flex flex-col border border-catppuccin-blue gap-3 p-3 hover:border-catppuccin-mauve transition-colors duration-150 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-catppuccin-green text-xl">{title}</p>
        {version && (
          <span className="text-catppuccin-peach text-xs border border-catppuccin-peach px-1.5 py-px">
            {version}
          </span>
        )}
      </div>
      <p className="text-terminal-light text-sm">{paragraph}</p>
      <div className="flex flex-row flex-wrap gap-3 text-catppuccin-sky text-sm">
        {tags.map((tag, i) => <span key={i}>{tag}</span>)}
      </div>
      <div className="border-t border-catppuccin-blue/40 pt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-terminal-gray text-xs hover:text-catppuccin-mauve transition-colors duration-150 w-fit"
        >
          <VscGithub size={14} />
          ~/view-source
        </a>
      </div>
    </div>
  );
};

const projects: ProjectPropsType[] = [
  {
    title: "my-blog",
    version: "WIP",
    paragraph: "Personal terminal-themed blog and portfolio built with Next.js and Tailwind. Designed to mimic my daily dev environment with planned Vim-style keyboard navigation.",
    tags: ["#nextjs", "#typescript", "#markdown"],
    github: "https://github.com/coronado03/my-blog",
  },
  {
    title: "nvim",
    paragraph: "My personal Neovim config built on lazy.nvim. Includes LSP, Treesitter, Telescope, and vim-tmux-navigator. Catppuccin Mocha themed, naturally.",
    tags: ["#lua", "#neovim", "#dotfiles"],
    github: "https://github.com/coronado03/nvim",
  },
  {
    title: "FEED",
    version: "DOWN",
    paragraph: "A Dev.to-style blogging platform. Temporarily offline while migrating from Firebase to Supabase after Firebase removed their free tier.",
    tags: ["#typescript", "#firebase", "#supabase"],
    github: "https://github.com/coronado03/FEED-WEBSITE",
  },
];

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl text-catppuccin-blue">
        coronado@blog <span className="text-catppuccin-red">:</span> <span className="text-catppuccin-teal">~/projects</span> <span className="text-terminal-light">$ ls -la</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
