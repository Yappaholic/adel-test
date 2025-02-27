"use client";
import useStore from "@/store/goodsStore";
import { ChevronLeft } from "lucide-react";
import { useShallow } from "zustand/shallow";
import FilterItem from "./FilterItem";
import PriceButton from "./PriceButton";

const FilterPanel = () => {
  const filters = useStore(useShallow((state) => state.filters));
  const emptyFilter = useStore(useShallow((state) => state.emptyFilter));
  return (
    <aside className="bg-white text-black rounded-md max-w-[19rem] max-h-full shadow-md">
      <div>
        <button
          className="flex px-4 py-3 mx-2 mt-2 bg-gray-200 items-center rounded-md justify-around"
          type="button"
        >
          <ChevronLeft size={20} />
          <p className="text-sm font-semibold">Антибактериальные средства</p>
        </button>
        <PriceButton />
      </div>
      <FilterItem name="Бренд" filterArray={filters.brand} />
      <FilterItem name="Форма выпуска" filterArray={filters.releaseForm} />
      <FilterItem name="Дозировка" filterArray={filters.dosage} />
      <FilterItem
        name="Количество в упаковке"
        filterArray={filters.quantityPerPackage}
      />
      <FilterItem
        name="Рецептурный отпуск"
        filterArray={["Без рецепта", "По рецепту"]}
      />
      <FilterItem name="Производитель" filterArray={filters.manufacturer} />
      <FilterItem name="Страна производства" filterArray={filters.country} />
      <FilterItem
        name="Температура хранения"
        filterArray={filters.storageTemperature}
      />
      <div className="sticky bottom-0 bg-white py-3 mx-2 mb-1">
        <button
          className="flex px-8 py-3 bg-gray-200 rounded-md w-full justify-center"
          type="button"
          onClick={() => emptyFilter()}
        >
          <p className="text-sm font-semibold">Очистить фильтр</p>
        </button>
      </div>
    </aside>
  );
};

export default FilterPanel;
