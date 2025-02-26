"use client";
import usePageIndex from "@/hooks/usePageNumber";
import useStore from "@/store/goodsStore";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx/lite";
import { useShallow } from "zustand/shallow";

function createButtons(pagesAmount: number, page: number) {
  const buttons = [];
  for (let pageNumber = 0; pageNumber < pagesAmount; pageNumber++) {
    const link = `/?page=${pageNumber + 1}`;
    buttons.push(
      <Link
        className={clsx(
          page === pageNumber + 1 && "bg-blue-500",
          "hover:bg-gray-200 bg-black text-white px-3 py-2 text-xs rounded-full",
        )}
        href={link}
        key={pageNumber}
      >
        {pageNumber + 1}
      </Link>,
    );
  }
  return buttons;
}
const PageNavigation = () => {
  const [, page] = usePageIndex();
  console.log(page);
  const pagesAmount = useStore(useShallow((state) => state.pagesAmount));
  const linkButtons = createButtons(pagesAmount, page);
  return (
    <div className="flex gap-1 jusify-self-center justify-center items-center self-center pl-60">
      {linkButtons}
      <button
        disabled={page === pagesAmount}
        className="bg-gray-600 rounded-full p-3"
        key="next"
      >
        {page === pagesAmount ? (
          <ChevronRight size={12} />
        ) : (
          <Link href={`/?page=${page + 1}`}>
            <ChevronRight size={12} />
          </Link>
        )}
      </button>
      ,
    </div>
  );
};
export default PageNavigation;
