import { Product } from "@/types/data";
import { create } from "zustand";
import type { TSort } from "@/types/sort";
interface IGoodsStore {
  goods: Array<Product>;
  sorting: TSort;
  updateSorting: (sortingType: TSort) => void;
  fetchGoods: (url: string) => void;
}

const useStore = create<IGoodsStore>((set) => ({
  goods: [],
  sorting: "По релевантности",
  updateSorting: (sortingType: TSort) => set({ sorting: sortingType }),
  fetchGoods: async (url: string) => {
    const response = await fetch(url);
    set({ goods: await response.json() });
  },
}));

export default useStore;
