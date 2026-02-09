"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import Logs from "./logs/logs";

type TextInputProps = {
  handleSubmit: () => void;
};

const TextInput = ({ handleSubmit }): TextInputProps  => {
  const [inputValue, setInputValue] = useState("")


  return (
    <form 
    onSubmit={(e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(inputValue)
    }}
    className="flex gap-2 items-center mt-6">
      <span className="text-[#a6e3a1]">coronado@blog:~$</span>
      <input
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        type="text"
        placeholder="type 'cd blog' to check my blog || type 'cd daily' to check my daily progress"
        className="text-terminal-white border-none outline-none flex-1 caret-[#a6e3a1] bg-transparent"
      />
    </form>
  )
}

type CommandType = 'logs' | 'articles' | 'help'; 

type CommandHistoryType = {
  id: number;
  command: CommandType;
}

const TerminalInput = () => {
  const [commandHistory, setCommandHistory] = useState<CommandHistoryType[] | null>([]);

  const createCommand = (command: ChatHistory) => {
    const commandId = commandHistory.length;
    if (command === 'logs') return {id: commandId.length, command:'logs'};
    if (command === 'articles') return {id: commandId.length, command:'articles'};
    if (command === 'help') return {id: commandId.length, command:'help'};
  };

  
  const handleSubmit  = (command: string) => {
    switch (command) {
      case "cd logs":
        setCommandHistory(oldCommandHistory => [...oldCommandHistory, createCommand("logs") ])
        break;

      case "cd articles":
        setCommandHistory(oldCommandHistory => [...oldCommandHistory, createCommand("articles") ])
        break;

      case "help":
        setCommandHistory(oldCommandHistory => [...oldCommandHistory, createCommand("help") ])
        break;

      case "clear":
        setCommandHistory([]);
        break;
    }
  };

return (
  <div>
    {commandHistory &&
      commandHistory.map((command) => {
        switch (command.command) {
          case "logs":
            return (
              <div key={command.id}>
                <h2 className="flex flex-row gap-x-2 text-terminal-white mb-4">
                  <span className="text-[#a6e3a1]">coronado@blog:~$</span> ls ~/Logs
                </h2>
                <Logs />
              </div>
            )

          case "articles":
            return (
              <div key={command.id}>
                <h2 className="flex flex-row gap-x-2 text-terminal-white mb-4">
                  <span className="text-[#a6e3a1]">coronado@blog:~$</span> ls ~/Articles
                </h2>
                <Logs />
              </div>
            )
          case "help":
            return (
              <div key={command.id}>
                <h2 className="flex flex-row gap-x-2 text-terminal-white mb-4">
                  <span className="text-[#a6e3a1]">coronado@blog:~$</span> help
                </h2>
                <div key={command.id} className="flex flex-row gap-x-2 text-terminal-white mb-4">
                  <p>help and stuff idk lol</p>
                </div>
              </div>
            )

          default:
            return null
        }
      })}

    <TextInput handleSubmit={handleSubmit} />
  </div>
)
}
export default TerminalInput;
