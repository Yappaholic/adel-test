import { IProduct } from "@/types/data";
import { create } from "zustand";
import type { TSort } from "@/types/sort";
interface IGoodsStore {
  goods: Array<IProduct>;
  sorting: TSort;
  pagesAmount: number;
  updateSorting: (sortingType: TSort) => void;
  fetch: (url: string) => void;
}

const useStore = create<IGoodsStore>((set) => ({
  goods: [],
  sorting: "По релевантности",
  pagesAmount: 0,
  updateSorting: (sortingType: TSort) => set({ sorting: sortingType }),
  fetch: async (url: string) => {
    const response = await fetch(url);
    const goods = await response.json();
    const pages = Math.ceil(goods.length / 12);
    set({ goods: goods, pagesAmount: pages });
  },
}));

useStore.getState().fetch("/api/products");

export default useStore;
