import ProjectSection from './projects';
import ExperienceSection from './experience';

export default function About() {
  return (
    <div className="flex flex-col gap-7.5 p-6">
      <div className="flex items-start gap-4">
      <div className="flex flex-row">

        <pre className="text-catppuccin-blue w-1/2 font-mono text-xs leading-tight">
{`██████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗ █████╗ ██████╗  ██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔═══██╗████╗  ██║██╔══██╗██╔══██╗██╔═══██╗
██║     ██║   ██║██████╔╝██║   ██║██╔██╗ ██║███████║██║  ██║██║   ██║
██║     ██║   ██║██╔══██╗██║   ██║██║╚██╗██║██╔══██║██║  ██║██║   ██║
╚██████╗╚██████╔╝██║  ██║╚██████╔╝██║ ╚████║██║  ██║██████╔╝╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝  ╚═════╝`}
        </pre>


        <div className="flex flex-col w-1/2 gap-3"> 
          <p className="text-terminal-light">
            <span className="text-catppuccin-green">user@coronado: ~$</span> cat welcome.txt
          </p>
          <h1 className="text-xl text-catppuccin-mauve">{"Coronado\'s Terminal Workspace"}</h1>
          <p className="text-terminal-light">
          Software Engineer, Linux enthusiaste and CS lvoer. I build things with Typescript, C and more! Welcome to my digital space
          </p>
        </div>
      </div>
      </div>
      <ExperienceSection />
      <ProjectSection />
    </div>
  );
}
