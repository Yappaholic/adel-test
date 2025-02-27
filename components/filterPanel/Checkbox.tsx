"use client";
import useStore from "@/store/goodsStore";
import { useState } from "react";

const Checkbox = ({ item }: { item: string | number }) => {
  const [isChecked, setIsChecked] = useState(false);
  const addFilter = useStore((state) => state.addFilter);
  const removeFilter = useStore((state) => state.removeFilter);
  const activeFilters = useStore((state) => state.appliedFilters);
  function handleChange() {
    if (isChecked === false) {
      addFilter(item.toString());
    } else {
      removeFilter(item.toString());
    }
    setIsChecked(!isChecked);
  }
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        value={item}
        checked={isChecked && activeFilters.indexOf(item.toString()) > -1}
        onChange={handleChange}
      />
      <label className="text-gray-500">{item}</label>
    </div>
  );
};
export default Checkbox;
