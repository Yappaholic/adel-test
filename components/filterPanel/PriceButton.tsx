"use client";
import clsx from "clsx/lite";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import useStore from "@/store/goodsStore";
import { useShallow } from "zustand/shallow";

const PriceButton = () => {
  const [minPrice, maxPrice] = useStore(
    useShallow((state) => [state.minPrice, state.maxPrice]),
  );
  const addFilter = useStore(useShallow((state) => state.addFilter));
  const [minSetPrice, setMinSetPrice] = useState(minPrice);
  const [maxSetPrice, setMaxSetPrice] = useState(maxPrice);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="my-2 p-2 border-b-2">
      <button
        className="flex w-full py-3 mx-2 mt-2 items-center justify-between"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-md font-semibold">Цена</p>
        <ChevronDown
          size={16}
          className={clsx(isOpen && "rotate-180", "transition-all")}
        />
      </button>
      {isOpen ? (
        <div className="flex gap-3 max-w-full justify-between px-3">
          <input
            type="number"
            placeholder={`от ${minPrice}`}
            className="min-w-20 bg-gray-200 py-0.5 px-2 border-2 hover:border-blue-500 rounded-sm"
            min={minPrice}
            max={maxPrice}
            onChange={(e) => setMinSetPrice(Number(e.target.value))}
            onBlur={() => addFilter(`от ${minSetPrice}`)}
          />
          <input
            type="number"
            placeholder={`до ${maxPrice}`}
            className="min-w-20 bg-gray-200 py-0.5 px-2 border-2 hover:border-blue-500 rounded-sm"
            min={minPrice}
            max={maxPrice}
            onChange={(e) => setMaxSetPrice(Number(e.target.value))}
            onBlur={() => addFilter(`до ${maxSetPrice}`)}
          />
        </div>
      ) : null}
    </div>
  );
};
export default PriceButton;
