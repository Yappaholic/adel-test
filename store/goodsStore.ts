import { IFilters, TCharacteristic, TProduct } from "@/types/data";
import { create } from "zustand";
import type { TSort } from "@/types/sort";

// Находит минимальную и максимальную стоимость товаров
function minMaxPrice(goods: TProduct[]): number[] {
  const prices: number[] = [];
  for (const item of goods) {
    prices.push(item.price);
  }
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return [min, max];
}
// Удаляет фильтр из списка
function removeFilter(name: string, filters: Array<string>): Array<string> {
  const index = filters.indexOf(name);
  if (index > -1) {
    filters.splice(index, 1);
  }
  return Array.from(filters);
}
// Добавляет фильтр в список
function addFilter(name: string, filters: Array<string>): Array<string> {
  filters.push(name);
  return Array.from(filters);
}
// Ищет всевозможные фильтры из списка полученных товаров
function createFilters(goods: TProduct[]) {
  const filters: IFilters = {
    brand: [],
    country: [],
    dosage: [],
    expirationDate: [],
    isByPrescription: [],
    manufacturer: [],
    quantityPerPackage: [],
    releaseForm: [],
    storageTemperature: [],
  };
  // Получаем массив характеристик
  const filterTypes = Object.keys(goods[0].characteristics);
  for (const filter of filterTypes) {
    // Для каждой характеристики создаем список из уникальных компонентов
    const set: Set<string | number | boolean> = new Set();
    // Проходимся по каждому товару и добавляем каждую характеристику в список
    for (let i = 0; i < goods.length; i++) {
      const item: TCharacteristic = goods[i].characteristics;
      set.add(item[filter as keyof TCharacteristic]);
    }
    // Превращаем список в простой массив и находим специальное поле для пуша значений
    const resultArr = Array.from(set.values()).sort();
    const filterField = filters[filter as keyof IFilters];
    //@ts-expect-error так как resultArr уже обозначен как массив из (string|number|boolean)
    filterField?.push(...resultArr);
  }
  return filters;
}

interface IGoodsStore {
  goods: Array<TProduct>;
  minPrice: number;
  maxPrice: number;
  sorting: TSort;
  pagesAmount: number;
  filters: IFilters;
  appliedFilters: string[];
  addFilter: (name: string) => void;
  removeFilter: (name: string) => void;
  emptyFilter: () => void;
  updateSorting: (sortingType: TSort) => void;
  fetch: (url: string) => void;
}

const useStore = create<IGoodsStore>((set) => ({
  goods: [],
  minPrice: 0,
  maxPrice: 0,
  sorting: "По релевантности",
  appliedFilters: [],
  filters: {
    brand: [],
    country: [],
    dosage: [],
    expirationDate: [],
    isByPrescription: [],
    manufacturer: [],
    quantityPerPackage: [],
    releaseForm: [],
    storageTemperature: [],
  },
  pagesAmount: 0,
  updateSorting: (sortingType: TSort) => set({ sorting: sortingType }),
  // Функция для получения данных с сервера, также устанавливает максимальное количество страниц
  // на основе количества товаров и ищет всевозможные фильтры для товаров
  fetch: async (url: string) => {
    const response = await fetch(url);
    await response.json().then((data) => {
      const pages = Math.ceil(data.length / 12);
      const filters = createFilters(data);
      const [min, max] = minMaxPrice(data);
      set({
        goods: data,
        pagesAmount: pages,
        filters: filters,
        minPrice: min,
        maxPrice: max,
      });
    });
  },

  addFilter: (name: string) =>
    set((state) => ({ appliedFilters: addFilter(name, state.appliedFilters) })),

  removeFilter: (name: string) =>
    set((state) => ({
      appliedFilters: removeFilter(name, state.appliedFilters),
    })),

  emptyFilter: () => set({ appliedFilters: [] }),
}));
// Модуль для предварительной загрузки данных
useStore.getState().fetch("http://localhost:3000/api/products");

export default useStore;
