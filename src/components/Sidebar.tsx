import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeNo: number;
  setActiveNo: (no: number) => void;
}

// Use the props interface in the component
const Sidebar: React.FC<SidebarProps> = ({ activeNo, setActiveNo }) => {
  return (
    <div className="w-64 2xl:w-96  p-4 h-full border  border-r-gray-700 dark:border-none">
      <h1 className="text-2xl font-bold mb-4 text-center">MODULES</h1>
      <div className="flex flex-col gap-5 ">
        {Array.from({ length: 12 }, (_, index) => (
          <Button
            key={index}
            className={`w-full mb-2 text-md `}
            onClick={() => setActiveNo(index + 1)}
            variant={index + 1 === activeNo ? "secondary" : "ghost"}
          >
            Module {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
