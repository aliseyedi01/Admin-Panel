// react
import React from "react";
// redux
import { remove } from "@/store/slice/productSlice";
import { Product } from "@/interface/product";
import { useAppDispatch, useAppSelector } from "@/interface/utils";
// icon
import { IoBagRemove } from "react-icons/io5";
// antd
import { Button, Tooltip } from "antd";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleRemoveProduct = (key: string) => {
    dispatch(remove(key));
  };

  return (
    <div className="flex flex-wrap p-5 dark:text-white">
      {products.map((product: Product) => (
        <div key={product.key} className=" group relative w-1/2 p-2 md:w-1/3 lg:w-1/4">
          <img
            src={product.image}
            alt={product.name}
            className=" relative -mb-[5px] w-full rounded-t-lg "
          />
          <Tooltip title="Remove">
            <Button
              type="ghost"
              onClick={() => handleRemoveProduct(product.key)}
              className="absolute left-3 top-4 hidden group-hover:block"
              icon={<IoBagRemove className="   text-lg text-red-600" />}
            />
          </Tooltip>

          {product.new && (
            <div className="absolute right-5 top-5  rounded-lg bg-blue-500 px-2 py-1 text-sm font-bold text-white md:text-base">
              New
            </div>
          )}
          {product.sale && (
            <div className="absolute right-5 top-5  rounded-s-xl bg-red-500 px-2 py-1 text-sm font-bold text-white md:text-base">
              Sale
            </div>
          )}
          <div className="rounded-b-lg bg-slate-100 p-1 dark:bg-indigo-950">
            <h3 className="truncate font-sans text-base">{product.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-base font-bold">{product.remaining}</p>
              <div className="flex gap-1">
                <p className="font-bold line-through">{product.priceOff && product.priceOff}</p>
                <p className="font-bold">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
