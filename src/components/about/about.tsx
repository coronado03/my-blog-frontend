import ProjectSection from './projects';
import ExperienceSection from './experience';

export default function About() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6 min-h-[calc(100vh-64px)]">
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
        <pre className="text-catppuccin-blue font-mono text-[6px] sm:text-[8px] lg:text-xs leading-tight flex-shrink-0 overflow-x-auto max-w-full">
{`██████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗ █████╗ ██████╗  ██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔═══██╗████╗  ██║██╔══██╗██╔══██╗██╔═══██╗
██║     ██║   ██║██████╔╝██║   ██║██╔██╗ ██║███████║██║  ██║██║   ██║
██║     ██║   ██║██╔══██╗██║   ██║██║╚██╗██║██╔══██║██║  ██║██║   ██║
╚██████╗╚██████╔╝██║  ██║╚██████╔╝██║ ╚████║██║  ██║██████╔╝╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝  ╚═════╝`}
        </pre>
        <div className="flex flex-col gap-2 pt-1">
          <p className="text-terminal-light text-sm font-mono">
            <span className="text-catppuccin-green">coronado@blog:~$</span> cat welcome.txt
          </p>
          <h1 className="text-catppuccin-mauve text-xl font-bold tracking-wide">
            {`Coronado's`} Terminal Workspace
          </h1>
          <p className="text-terminal-light text-sm leading-relaxed">
            Fullstack dev obsessed with tooling, productivity and CS. I build things with TypeScript, C and more —
            then spend just as much time optimizing the environment I build them in. Welcome to my digital space.
          </p>
        </div>
      </div>
      <ExperienceSection />
      <ProjectSection />
    </div>
  );
}
