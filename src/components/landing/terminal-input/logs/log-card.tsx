import Link from "next/link";
import { Button } from "@/components/ui/button";

type LogCardProps = {
  data: logType;
};

type logType = {
  id: number;
  title: string;
  created_at: string;
  content: string;
}

const LogCard = ({ data }: LogCardProps) => {
  return (
    <div className="flex flex-col justify-between text-terminal-white font-mono rounded-2xl p-4 hover:border-[--color-catppuccin-green] transition-colors duration-200">
      <div className="flex flex-row p-2 bg-muted items-center gap-x-2">
        <div className="size-3 bg-catppuccin-red rounded-full" />
        <div className="size-3 bg-catppuccin-yellow rounded-full" />
        <div className="size-3 bg-catppuccin-green rounded-full" />
        <div className="">blog/{data.title}.md</div>
      </div>
      <div className="border border-catppuccin-green/30">
        <div>
          <p className="text-color-catppuccin-green text-sm">$ cat logs/{data.title}</p>
          <div className="flex flex-row gap-3 items-center mb-2">
            <p className="text-catppuccin-green text-sm">{data.title}</p>
            <span className="ml-auto text-xs text-terminal-gray">{data.created_at}</span>
          </div>
          <p className="text-sm text-terminal-light leading-snug">{data.content}</p>
        </div>
        <Link href={`article/${data.id}`}>
        <Button
          variant="outline"
          className="mt-4 w-32 border-color-catppuccin-green text-catppuccin-green hover:bg-catppuccin-green hover:text-terminal-black transition-colors duration-200 cursor-pointer"
        >
          Read More
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default LogCard;
