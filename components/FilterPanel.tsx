import useStore from "@/store/goodsStore";
import type { IProduct } from "@/types/data";

const FilterPanel = () => {
  const goods: IProduct[] = useStore((state) => state.goods);
  return <div className="text-black">hello</div>;
};

export default FilterPanel;
