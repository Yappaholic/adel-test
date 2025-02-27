"use client";
import clsx from "clsx/lite";
import { X } from "lucide-react";
import useStore from "@/store/goodsStore";

const TopBarLeft = () => {
  const filters = useStore((state) => state.appliedFilters);
  const removeFilter = useStore((state) => state.removeFilter);
  const emptyFilter = useStore((state) => state.emptyFilter);
  return (
    <div
      className={clsx(
        filters.length === 0 && "invisible",
        "text-black flex gap-2",
      )}
    >
      <button
        type="button"
        className="text-sm flex items-center gap-1 bg-gray-200 py-1 px-3 rounded-full hover:text-blue-500"
        onClick={() => emptyFilter()}
      >
        <p className="text-sm">Очистить</p>
        <X size={10} />
      </button>
      {filters.map((item) => (
        <button
          key={crypto.randomUUID()}
          type="button"
          className="text-sm flex items-center gap-1 bg-gray-200 py-1 px-3 rounded-full hover:text-blue-500 hover:line-through"
          onClick={() => removeFilter(item)}
        >
          {item}
          <X size={10} />
        </button>
      ))}
    </div>
  );
};

export default TopBarLeft;
