"use client";
import SortButton from "./SortButton";
import LayoutButton from "./LayoutButton";

const TopBarRight = () => {
  return (
    <div className="flex gap-2 items-center">
      <SortButton />
      <LayoutButton />
    </div>
  );
};

export default TopBarRight;
