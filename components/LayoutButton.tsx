import { useState } from "react";
import { LayoutGrid, Rows3 } from "lucide-react";
import clsx from "clsx/lite";

const LayoutButton = () => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div className="bg-white rounded-md flex items-center justify-center h-9 w-[4.5rem]">
      <button
        onClick={() => setIsGrid(true)}
        className={clsx(
          isGrid === true && "bg-blue-600",
          "rounded-md",
          "p-1.5",
        )}
      >
        <LayoutGrid
          size={20}
          className={clsx(
            isGrid === true
              ? "text-white"
              : "text-gray-500 hover:text-blue-300",
          )}
        />
      </button>
      <button
        onClick={() => setIsGrid(false)}
        className={clsx(
          isGrid === false && "bg-blue-600",
          "rounded-md",
          "p-1.5",
        )}
      >
        <Rows3
          size={20}
          className={clsx(
            isGrid === false
              ? "text-white"
              : "text-gray-500 hover:text-blue-300",
          )}
        />
      </button>
    </div>
  );
};
export default LayoutButton;
