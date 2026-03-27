import { VscGithub } from "react-icons/vsc";
import { VscRepoForked } from "react-icons/vsc";
import { VscStarEmpty } from "react-icons/vsc";
import { projects } from "@/content/data/projects";
import { ProjectPropsType } from "@/types/project";
import Link from "next/link";

const Project = ({ title, version, paragraph, tags, github, websiteUrl, starCount, forkCount }: ProjectPropsType) => {
  return (
    <div className="flex flex-col border border-catppuccin-blue gap-3 p-3 hover:border-catppuccin-mauve transition-colors duration-150 rounded-md">
      <div className="flex items-center justify-between">
        {
          websiteUrl ? (
            <Link href={websiteUrl}>
              <p className="text-catppuccin-green text-xl hover:underline">{title}</p>
            </Link>
          ) : <p className="text-catppuccin-green text-xl">{title}</p>
        }
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
      <div className="border-t border-catppuccin-blue/40 pt-2 flex flex-row">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-terminal-gray text-xs hover:text-catppuccin-mauve transition-colors duration-150 w-fit"
        >
          <VscGithub size={14} />
          ~/view-source
        </a>
        <div className="flex flex-row items-center text-xs ml-auto gap-1">
          <VscStarEmpty size={14} /> {starCount}
          <VscRepoForked size={14} /> {forkCount}
        </div>
      </div>
    </div>
  );
};


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
