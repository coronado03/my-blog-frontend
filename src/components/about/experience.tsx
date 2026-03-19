export default function ExperienceSection() {
  return (
    <section className="p-4 px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="flex flex-col rounded-md overflow-hidden border border-catppuccin-blue">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-catppuccin-blue bg-terminal-dark">
            <span className="text-sm text-terminal-light flex-1 tracking-wide">description about_me.md</span>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-catppuccin-yellow" />
              <span className="w-2.5 h-2.5 rounded-full bg-catppuccin-green" />
            </div>
          </div>

          <div className="p-4 flex-1">
            <h3 className="text-catppuccin-mauve text-sm font-bold tracking-widest mb-2"># Bio</h3>
            <p className="text-terminal-light text-sm leading-relaxed mb-4">
              I'm a developer who genuinely enjoys building things — from scalable web systems to messing with my
              dotfiles at 2am. Outside of code I'm into reading, playing volleyball, and lifting. I also have a
              40 inch vertical, I'm a huge fan of track training and research.
            </p>

            <h3 className="text-catppuccin-mauve text-sm font-bold tracking-widest mb-3"># Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-3">

              <div className="flex flex-col gap-1">
                <span className="text-terminal-gray text-xs italic mb-1">{`//`} languages</span>
                <SkillEntry label="TypeScript" href="https://www.typescriptlang.org" color="text-catppuccin-blue" />
                <SkillEntry label="Python"     href="https://www.python.org"         color="text-catppuccin-yellow" />
                <SkillEntry label="C#"         href="https://dotnet.microsoft.com"   color="text-catppuccin-mauve" />
                <SkillEntry label="C"          href="https://en.wikipedia.org/wiki/C_(programming_language)" color="text-catppuccin-peach" />
                <SkillEntry label="Bash"       href="https://www.gnu.org/software/bash" color="text-catppuccin-green" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-terminal-gray text-xs italic mb-1">{`//`} frameworks</span>
                <SkillEntry label="Next.js" href="https://nextjs.org"     color="text-catppuccin-sky" />
                <SkillEntry label="Nest.js" href="https://nestjs.com"     color="text-catppuccin-red" />
                <SkillEntry label="Docker"  href="https://www.docker.com" color="text-catppuccin-sky" />
                <SkillEntry label="Redis"   href="https://redis.io"       color="text-catppuccin-red" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-terminal-gray text-xs italic mb-1">{`//`} data</span>
                <SkillEntry label="PostgreSQL" href="https://www.postgresql.org" color="text-catppuccin-sapphire" />
                <SkillEntry label="Git"        href="https://git-scm.com"        color="text-catppuccin-peach" />
                <SkillEntry label="AWS"        href="https://aws.amazon.com"     color="text-catppuccin-peach" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-terminal-gray text-xs italic mb-1">{`//`} setup</span>
                <SkillEntry label="Arch Linux"  href="https://archlinux.org"                        color="text-catppuccin-mauve" />
                <SkillEntry label="i3"          href="https://i3wm.org"                             color="text-catppuccin-mauve" />
                <SkillEntry label="Neovim"      href="https://neovim.io"                            color="text-catppuccin-green" />
                <SkillEntry label="tmux"        href="https://github.com/tmux/tmux"                 color="text-catppuccin-green" />
                <SkillEntry label="zsh"         href="https://www.zsh.org"                          color="text-catppuccin-green" />
                <SkillEntry label="Sofle Split" href="https://josefadamcik.github.io/SofleKeyboard" color="text-catppuccin-mauve" />
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-md overflow-hidden border border-catppuccin-blue">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-catppuccin-blue bg-terminal-dark">
            <span className="text-sm text-terminal-light flex-1 tracking-wide">timeline experience.md</span>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-catppuccin-yellow" />
              <span className="w-2.5 h-2.5 rounded-full bg-catppuccin-green" />
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <TimelineEntry
              dates="2024 - Present"
              role="Developer and Consultant"
              company="@Nubinno"
              companyHref="https://nubinno.com"
              description="Fullstack development combined with consulting work in Pharma."
              active
            />
            <TimelineEntry
              dates="2023 - 2023"
              role="Intern Full Stack Development"
              company="@Freeport Metrics"
              companyHref="https://freeportmetrics.com"
              description="Fullstack development at an American company."
            />
            <TimelineEntry
              dates="2022 - 2023"
              role="Freelance Developer"
              company="@Fiverr"
              companyHref="https://fiverr.com"
              description="Freelance web development work across various client projects."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillEntry({ label, href, color }: { label: string; href: string; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-sm font-mono hover:underline underline-offset-2 w-fit ${color} hover:opacity-80 transition-opacity duration-150`}
    >
      - {label}
    </a>
  );
}

function TimelineEntry({
  dates,
  role,
  company,
  companyHref,
  description,
  active,
}: {
  dates: string;
  role: string;
  company: string;
  companyHref: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="flex gap-4 pb-5 last:pb-0">
      <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
        <div className={`w-3 h-3 rounded-full border-2 flex-shrink-0 z-10 ${active ? "bg-catppuccin-green border-catppuccin-green" : "bg-terminal-gray border-muted"}`} />
        <div className="w-0.5 flex-1 mt-1 min-h-6 bg-gradient-to-b from-muted to-transparent" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-catppuccin-peach text-xs font-semibold tracking-widest">{dates}</span>
        {active && (
          <span className="text-catppuccin-green text-xs border border-catppuccin-green rounded px-1.5 py-px w-fit tracking-widest">
            ● CURRENT
          </span>
        )}
        <h4 className="text-catppuccin-lavender text-base font-bold mt-0.5">
          {role}{" "}
          <a
            href={companyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-catppuccin-sapphire font-normal hover:underline underline-offset-2"
          >
            {company}
          </a>
        </h4>
        <p className="text-terminal-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
