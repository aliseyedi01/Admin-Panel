// react
import React, { useState } from "react";
// redux
import { Product } from "@/interface/product";
import { useAppSelector } from "@/interface/utils";
// icon
import { IoBagRemove } from "react-icons/io5";
// antd
import { Button, Tooltip } from "antd";
import RemoveProductModal from "@/Components/Modal/RemoveProductModal";
import { Link } from "react-router-dom";
import { NewItem } from "@/Components";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.product);

  // remove product
  const [productRemoved, setProductRemoved] = useState<Product | null>(null);
  const handleRemoveProduct = (product: Product) => {
    setProductRemoved(product);
  };

  return (
    <div className=" hide-scrollbar h-full overflow-y-scroll p-5 pt-20">
      <NewItem name="Product" path="/product/newproduct" />
      <div className="flex h-full flex-wrap  dark:text-white">
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
                onClick={() => handleRemoveProduct(product)}
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
              <Link
                to={`/product/${product.key}`}
                className="text-indigo-900 no-underline hover:text-indigo-500"
              >
                <h3 className="truncate font-sans text-base dark:text-indigo-500 ">
                  {product.name}
                </h3>
              </Link>
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
        {productRemoved && <RemoveProductModal product={productRemoved} />}
      </div>
    </div>
  );
};

export default Products;
