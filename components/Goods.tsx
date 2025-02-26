"use client";
import useStore from "@/store/goodsStore";
import { IProduct } from "@/types/data";
import Image from "next/image";
import { Heart } from "lucide-react";
import usePageIndex from "@/hooks/usePageNumber";

function createGoods(pageGoods: IProduct[]) {
  const goods = pageGoods.map((item) => (
    <a
      key={item.id}
      className="text-black flex flex-col items-center bg-white min-w-[246px] rounded-md py-3 justify-self-center px-2 gap-1 hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <Image
          src={item.image}
          alt="Фотография лекарства"
          height={246}
          width={246}
        />
        {item.characteristics.isByPrescription ? (
          <p className="absolute z-10 text-xs bottom-1 left-1 py-0.5 px-1 bg-red-200 text-red-600 rounded-md">
            По рецепту
          </p>
        ) : null}
      </div>
      <p className="text-xl font-semibold self-start px-2.5">{item.price} р.</p>
      <p className="max-w-full text-sm min-h-16 px-2.5">{item.title} </p>
      <p className="text-xs self-start text-gray-600 mb-4 px-2.5">
        {item.characteristics.manufacturer}
      </p>
      <div className="flex gap-4 justify-between w-full px-2.5">
        <button className="text-center bg-blue-500 text-white font-medium px-12 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
          В корзину
        </button>
        <button className="hover:text-pink-600">
          <Heart size={26} />
        </button>
      </div>
    </a>
  ));
  return goods;
}
const Goods = () => {
  const [index] = usePageIndex();
  const goods = useStore((state) => state.goods);
  const pageGoods = goods.slice(index, index + 12);
  const items = createGoods(pageGoods);

  return <div className="grid grid-cols-4 grid-rows-3 gap-4 mb-4">{items}</div>;
};

export default Goods;
