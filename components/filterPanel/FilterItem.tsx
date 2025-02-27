"use client";
import { ChevronDown } from "lucide-react";
import Checkbox from "./Checkbox";
import clsx from "clsx/lite";
import { useState } from "react";

interface FilterItemProps {
  name: string;
  filterArray?: (string | number)[];
}
const FilterItem = ({ name, filterArray }: FilterItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="my-2 p-2 border-b-2">
      <button
        className="flex justify-between items-center w-full mb-2"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold">{name}</p>
        <ChevronDown
          size={16}
          className={clsx(isOpen && "rotate-180", "transition-all")}
        />
      </button>
      {isOpen ? (
        <div className="max-h-36 overflow-auto scroll-auto flex flex-col gap-1">
          {filterArray?.map((item) => (
            <Checkbox item={item} key={`${name}:${item}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterItem;
