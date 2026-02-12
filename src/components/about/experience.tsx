export default function ExperienceSection() {
  return(

  <div className="flex flex-row gap-3">
    <div className="flex flex-col border border-catppuccin-blue bg-catppucin-blue gap-1">
      <div className="flex flex-row bg-catppuccin-green px-3 py-1">
        <p className="text-terminal-dark">description <span>about_me.md</span></p>
        <div className="ml-auto mr-2 self-center rounded-full bg-terminal-dark size-3"/>
        <div className="mr-2 self-center rounded-full bg-terminal-dark size-3"/>
      </div>
      <div className="flex flex-col text-catppuccin-blue gap-3 p-3">
        <p># Bio </p>
        <p className="text-terminal-light"> I am a developer who loves to mess with his workflow for max productivity! My work focuses on building scalable frontend/backend systems and I mess around with other areas of CS for fun.</p>
        <p># Skills </p>
        <div className="grid grid-cols-2 gap-2 text-catppuccin-sky">
            <div>- Golang</div>
            <div>- Rust</div>
            <div>- TypeScript</div>
            <div>- Neovim</div>
            <div>- Docker</div>
            <div>- Linux Admin</div>
        </div>
      </div>
    </div>

    <div className="flex flex-col border border-catppuccin-blue bg-catppucin-blue gap-1 w-full">
      <div className="flex flex-row bg-catppuccin-green px-3 py-1">
        <p className="text-terminal-dark">timeline <span>experience.md</span></p>
        <div className="ml-auto mr-2 self-center rounded-full bg-terminal-dark size-3"/>
        <div className="mr-2 self-center rounded-full bg-terminal-dark size-3"/>
      </div>

      <div className="flex flex-row gap-3 p-3 text-base">

      <div className="flex flex-col [&>div]:bg-catppuccin-blue">
        <div className="self-center rounded-full size-6"/>
        <div className="h-18 w-0.5 ml-[10.5px]"/>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-catppuccin-peach">2024 - Present </p>
        <p className="text-terminal-white">Developer and Consultant @Nubinno </p>
        <p className="text-terminal-light">Fullstack development combined with consulting work in Pharma.</p>
      </div>

      </div>
      <div className="flex flex-row gap-3 p-3 text-base">

      <div className="flex flex-col [&>div]:bg-catppuccin-blue">
        <div className="self-center rounded-full size-6"/>
        <div className="h-18 w-0.5 ml-[10.5px]"/>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-catppuccin-peach">2023 - 2023 </p>
        <p className="text-terminal-white">Intern Full Stack Development @Freeport Metrics </p>
        <p className="text-terminal-light">Fullstack development at an American company</p>
      </div>

      </div>
    </div>
</div>
  )
};

