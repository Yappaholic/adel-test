"use client";
import useStore from "@/store/goodsStore";
import { TSort } from "@/types/sort";
import { clsx } from "clsx/lite";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sorting = useStore((state) => state.sorting);
  const updateSorting = useStore((state) => state.updateSorting);
  function handleUpdate(sortingType: TSort) {
    updateSorting(sortingType);
    setIsOpen(false);
  }
  return (
    <div className="space-y-2 z-10 text-black justiy-self-end self-end min-w-[150px]">
      <button
        className="bg-gray-200 text-xs flex items-center rounded-md px-2 py-2.5 gap-1 w-full"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{sorting}</p>
        <ChevronDown
          size={14}
          className={clsx(isOpen && "rotate-180", "transition-all")}
        />
      </button>
      {isOpen ? (
        <div className="absolute flex flex-col rounded-md shadow-md p-2 bg-white">
          <button
            className="bg-white hover:bg-gray-300 p-1 rounded-md"
            type="button"
            onClick={() => handleUpdate("По релевантности")}
          >
            По релевантности
          </button>
          <button
            className="bg-white hover:bg-gray-300 p-1 rounded-md"
            type="button"
            onClick={() => handleUpdate("Сначала дешевые")}
          >
            Сначала дешевые
          </button>
          <button
            className="bg-white hover:bg-gray-300 p-1 rounded-md"
            type="button"
            onClick={() => handleUpdate("Сначала дорогие")}
          >
            Сначала дорогие
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SortButton;
