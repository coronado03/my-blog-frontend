
type ProjectPropsType = {
  title: string;
  version?: string;
  paragraph: string;
  tags: string[];
};

const Project = ({title, version, paragraph, tags}: ProjectPropsType) => {

  return (
      <div className="flex flex-col border border-catppuccin-blue gap-3 p-3">
        <p className="text-catppuccin-green text-xl">{title}</p>
        <p className="text-terminal-light">{paragraph}</p>
        <div className="flex flex-row gap-3 text-catppuccin-sky">
          {tags.map((tag, _) => <span key={_}>{tag}</span>)}
        </div>
      </div>
  );
};

const projects = {
  title: "Project 1", 
  version: "WIP", 
  paragraph: "A command line utility for automating cloud deployment with Go. Support multi region scaling",
  tags: ["#golang", "#python", "#aws"]
};
export default function ProjectSection() {

  return (

    <div className="flex flex-col">
      <h3 className="text-xl text-catppuccin-lavender">
        coronado@blog:~/projects$ <span className="text-terminal-light">ls -la </span>
      </h3>
      <div className="flex flex-row gap-6">
      <Project title={projects.title} paragraph={projects.paragraph} version={projects.version} tags={projects.tags}/>
      <Project title={projects.title} paragraph={projects.paragraph} version={projects.version} tags={projects.tags}/>
      <Project title={projects.title} paragraph={projects.paragraph} version={projects.version} tags={projects.tags}/>
      </div>
    </div>
  );
};
