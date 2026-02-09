import TerminalInput from "./terminal-input/terminal-input";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row">
        <pre className="whitespace-pre font-mono text-catppuccin-lavender overflow-x-auto p-6">
          {`⠀⠀⡰⣽⡁⣾⡿⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⢀⢤⠀⠀⠀
⠀⠀⠈⣿⣿⢑⣽⣮⣾⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⣊⣃⠀⠀⠀
⠀⠀⠀⠘⢿⣾⣿⡿⣫⢞⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀
⠀⣴⠶⣂⠴⣷⣟⣷⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣷⣤⡤⠤
⠸⣷⣷⣴⣶⣮⢿⢣⣾⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣟⠝⢿⣿⣿⣿⣟⢧
⠀⣿⣿⣵⣶⡷⡤⠟⢛⢫⠈⢢⠀⠈⠆⠹⢝⡿⣿⣿⣿⣟⡽⢿⣿⣿⣤⣉⢩
⠀⢸⣿⡉⠀⠙⠀⠀⠀⠀⢃⢀⠡⡀⢈⡤⠮⡦⢸⠿⣿⡟⢫⣿⣿⣿⣿⣯⣿
⠀⠀⣿⣇⡀⠀⠀⠀⠀⠀⠹⢀⣠⠞⢉⡴⡶⠃⣻⠀⣿⡯⣼⣿⣿⣿⣿⣿⣿
⠀⢀⣽⣿⣝⣦⣄⡀⠀⠠⡴⠟⡻⢯⡭⠋⠀⢀⡉⠔⡽⡻⢻⣿⣿⣿⣿⣿⣿
⢀⣎⣿⢿⣿⡝⠶⠙⢹⡄⠈⠉⠙⠀⠀⠀⠀⢈⡡⠔⠇⣧⣿⣿⣿⣿⣿⣿⣿
⢘⢽⠃⣾⡟⣿⣦⡀⠺⣃⠀⠀⠀⠀⠀⠀⠠⠉⠄⣀⣴⣽⡋⣾⡇⣿⣿⣿⣿
⡀⠸⠄⣿⡓⣿⣿⣿⣤⡸⣀⠀⡠⠄⠀⣀⠀⠑⢀⡾⢹⣿⣇⣿⣵⣿⣿⣿⣿
⠀⠀⠀⢹⣷⡟⣿⡿⣿⣿⣾⣿⠟⠛⠛⡈⢻⣦⡾⠁⠈⠛⢿⣿⣿⣿⣿⣻⣿
⠀⠀⠀⡰⡟⣇⡿⣿⣿⣿⣿⣿⣕⢲⢫⣤⢾⡿⠁⠀⠀⠀⡜⣽⣿⡟⣿⣿⠿
⠀⠀⢀⡇⠁⣾⣾⣿⣿⣿⣿⣿⢻⣷⣾⡿⣏⠀⢠⡉⠀⡜⣠⣿⣿⢡⣿⣿⠀
⠀⠀⠘⣷⣼⠟⢫⣿⢫⣿⣿⢹⣾⣿⣿⡞⠝⡏⠋⠻⣯⣮⣿⣿⣿⠟⠁⠫⣧
⠀⠀⠀⣸⣿⢀⠞⡏⣾⣿⣿⣼⣿⣿⣿⠇⠈⠑⠀⡀⠀⣸⣿⣿⡏⠀⠀⠀⠀
⢀⠀⠈⠘⠿⢯⡼⢽⣿⡟⠙⢿⣿⣿⡿⠀⠀⠀⠀⡻⢠⣿⣿⡟⡃⠀⠀⠀⠀`}
        </pre>
        <div className="whitespace-pre font-mono text-catppuccin-lavender overflow-x-auto p-6">
          <p>user@terminal:~$ cat welcome.txt</p>
          <h1 className="mb-5">Coronado Blog</h1>
          <p>Articles about SWE, Linux, terminal tools, and developer productivity</p>
          <p>Also publish my daily learnings!</p>
        </div>
      </div>
      <TerminalInput />
    </div>
  );
}
export default Landing;
