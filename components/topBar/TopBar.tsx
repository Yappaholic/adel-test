"use client";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";

const TopBar = () => {
  return (
    <div className="flex justify-between gap-2 mb-4">
      <TopBarLeft />
      <TopBarRight />
    </div>
  );
};
export default TopBar;
