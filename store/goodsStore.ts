import { IProduct } from "@/types/data";
import { create } from "zustand";
import type { TSort } from "@/types/sort";
interface IGoodsStore {
  goods: Array<IProduct>;
  sorting: TSort;
  updateSorting: (sortingType: TSort) => void;
  fetch: (url: string) => void;
}

const useStore = create<IGoodsStore>((set) => ({
  goods: [],
  sorting: "По релевантности",
  updateSorting: (sortingType: TSort) => set({ sorting: sortingType }),
  fetch: async (url: string) => {
    const response = await fetch(url);
    set({ goods: await response.json() });
  },
}));

useStore.getState().fetch("/api/products");

export default useStore;
