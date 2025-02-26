import { useSearchParams } from "next/navigation";

export default function usePageIndex() {
  const params = useSearchParams();
  const page = Number(params.get("page"));
  let index = 0;
  if (page === 0) {
    index = 12 * 0;
  } else {
    index = 12 * (page - 1);
  }
  return [index, page];
}
