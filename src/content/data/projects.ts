import {ProjectPropsType} from "@/types/project";

export const projects: ProjectPropsType[] = [
  {
    title: "vistula.network",
    version: "1.0",
    paragraph: "Website with many users from Vistula University used as a connection hub for builders.",
    tags: ["#nextjs", "#typescript", "#opensource", "#community"],
    github: "https://github.com/coronado03/my-blog",
    websiteUrl: "https://vistula-network.com/",
    starCount: 2,
    forkCount: 3,
  },
  {
    title: "nvim",
    version: "1.0",
    paragraph: "My personal Neovim config built on lazy.nvim. Includes LSP, Treesitter, Telescope, and vim-tmux-navigator. Catppuccin Mocha themed, naturally.",
    tags: ["#lua", "#neovim", "#dotfiles"],
    github: "https://github.com/coronado03/nvim",
    starCount: 1,
    forkCount: 0,
  },
  {
    title: "FEED",
    version: "DOWN",
    paragraph: "A Dev.to-style blogging platform. Temporarily offline while migrating from Firebase to Supabase after Firebase removed their free tier.",
    tags: ["#typescript", "#firebase", "#supabase"],
    github: "https://github.com/coronado03/FEED-WEBSITE",
    starCount: 2,
    forkCount: 0,
  },
];
