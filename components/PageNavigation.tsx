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
          page === pageNumber + 1 && "bg-blue-500 text-white hover:bg-blue-500",
          "hover:bg-gray-200",
          "text-black",
          "font-bold",
          "px-3",
          " py-2",
          " text-xs",
          "rounded-full",
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
const NextPageButton = ({ page }: { page: number }) => {
  const pagesAmount: number = useStore(
    useShallow((state) => state.pagesAmount),
  );
  if (page === pagesAmount)
    return (
      <button
        disabled
        role="link"
        className="bg-gray-600 rounded-full size-8 flex items-center justify-center"
        type="button"
      >
        <ChevronRight size={12} />
      </button>
    );
  if (page !== pagesAmount)
    return (
      <Link
        href={`/?page=${page + 1}`}
        className="bg-gray-600 rounded-full size-8 flex items-center justify-center"
      >
        <ChevronRight size={12} />
      </Link>
    );
};
const PageNavigation = () => {
  const [, page] = usePageIndex();
  const pagesAmount = useStore(useShallow((state) => state.pagesAmount));
  const linkButtons = createButtons(pagesAmount, page);
  return (
    <div className="flex gap-1 jusify-self-center justify-center items-center self-center pl-60">
      {linkButtons}
      <NextPageButton page={page} />
    </div>
  );
};
export default PageNavigation;
