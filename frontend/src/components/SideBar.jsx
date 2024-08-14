import { useState } from "react";
import { Menu, X } from "lucide-react";
import Nav from "./Nav";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      <div
        className={`transition-all duration-100 ease-in-out ${
          isExpanded ? "w-64" : "w-16"
        } bg-red-800 h-screen`}
      >
        <button className="" onClick={toggleSidebar}>
          {isExpanded ? <X /> : <Menu />}
        </button>
        <Nav isOpen={isExpanded} />
      </div>
    </div>
  );
};

export default SideBar;
