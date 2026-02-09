import { Button } from "@/components/ui/button";
import { FaBookOpen, FaTerminal } from "react-icons/fa";
import { LuBraces } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="terminal-border border-b-2">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 terminal-border flex items-center justify-center">
                <FaTerminal className="h-6 w-6 text-terminal-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-terminal text-terminal-white tracking-wider">
                CORONADO.BLOG
              </h1>
              <p className="text-xs font-terminal text-terminal-gray mt-1">
                &gt; UNAUTHORIZED USER
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="terminal" size="sm" className="hidden md:flex">
              <LuBraces className="h-3 w-3 mr-2" />
              DAILY
            </Button>
            <Button variant="terminal" size="sm" className="hidden md:flex">
              <FaBookOpen className="h-3 w-3 mr-2" />
              ARTICLES
            </Button>
            <Button variant="terminal" size="sm" className="hidden md:flex">
              <RiAdminLine className="h-3 w-3 mr-2" />
              ADMIN ONLY
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
