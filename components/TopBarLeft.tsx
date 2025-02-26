"use client";
import clsx from "clsx/lite";
import { X } from "lucide-react";
import { useState } from "react";

const TopBarLeft = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className={clsx(isVisible === false && "invisible", "text-black")}>
      <button
        type="button"
        className="flex items-center gap-1 bg-gray-200 py-1 px-3 rounded-full hover:text-blue-500"
        onClick={() => setIsVisible(false)}
      >
        <p className="text-sm">Очистить</p>
        <X size={10} />
      </button>
    </div>
  );
};

export default TopBarLeft;
