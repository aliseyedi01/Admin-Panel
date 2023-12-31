// react
import React, { useState, useEffect } from "react";
// redux
import { Product } from "@/interface/product";
import { useAppDispatch, useAppSelector } from "@/interface/utils";
import { addProducts } from "@/store/slice/productSlice";
// icon
import { IoTrashOutline, IoBagCheck } from "react-icons/io5";
// antd
import { Button, Tooltip } from "antd";
import RemoveProductModal from "@/Components/Modal/RemoveProductModal";
import { Link } from "react-router-dom";
import { LazyImage, NewItem, PageLayout } from "@/Components";
// api
import { useGetProductsQuery } from "@/store/api/supabaseApi";

const Products: React.FC = () => {
  // get products of redux
  const products = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  const { data: productsApi } = useGetProductsQuery({});

  useEffect(() => {
    if (productsApi) {
      const newProducts = productsApi.filter(
        (productApi) => !products.some((product) => product.key === productApi.key),
      );
      if (newProducts.length > 0) {
        dispatch(addProducts(newProducts));
      }
    }
  }, [productsApi]);

  // remove product
  const [productRemoved, setProductRemoved] = useState<Product | null>(null);

  return (
    <div className=" hide-scrollbar h-full overflow-y-scroll">
      <PageLayout>
        <NewItem name="Product" path="/product/newproduct" />
        <div className="flex h-full flex-wrap   dark:text-white">
          {products &&
            products.map((product: Product) => (
              <div key={product.key} className="group relative w-1/2 p-2 md:w-1/3 lg:w-1/4">
                <div className="h-44 w-full overflow-hidden rounded-t-lg">
                  <LazyImage
                    src={product.image}
                    alt={product.name}
                    className="-mb-[5px] h-44 w-full rounded-t-lg duration-200 group-hover:scale-110 md:h-52 "
                    type="product"
                  />
                </div>
                {product.new && (
                  <div className="absolute right-5 top-5 rounded-lg bg-blue-500 px-2 py-1 font-Ubuntu text-xs font-bold text-white md:text-base">
                    New
                  </div>
                )}
                {product.sale && (
                  <div className="absolute left-5 top-5 rounded-lg bg-red-500 px-2 py-1 font-Ubuntu text-xs font-bold text-white md:text-base">
                    Sale
                  </div>
                )}
                {/* below section */}
                <div className="mt-1 w-full rounded-b-lg bg-slate-100 p-1 dark:bg-indigo-950">
                  {/* title products */}
                  <div>
                    <h3 className="truncate font-Montserrat text-sm text-indigo-900 no-underline dark:text-indigo-500 md:text-base ">
                      {product.name}
                    </h3>
                  </div>
                  {/* info products */}
                  <div className="mt-1 flex items-center justify-between gap-2 font-Lilita font-bold">
                    {/* remove & edit products */}
                    <div className="text-bas !p-0 md:text-lg">
                      {/* Remove */}
                      <Tooltip title="Remove">
                        <Button
                          type="ghost"
                          onClick={() => setProductRemoved(product)}
                          className=""
                          icon={<IoTrashOutline className=" text-red-600" />}
                        />
                      </Tooltip>
                      {/* Edit */}
                      <Tooltip title="Edit">
                        <Link to={`/product/${product.key}`}>
                          <Button type="ghost" icon={<IoBagCheck className="text-red-600" />} />
                        </Link>
                      </Tooltip>
                    </div>
                    {/* price & price-off */}
                    <div className="flex items-center gap-2 text-xs md:text-base">
                      <p className="font-Montserrat line-through">
                        {product.priceOff && product.priceOff}
                      </p>
                      <p className="">${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {productRemoved && <RemoveProductModal type="product" item={productRemoved} />}
        </div>
      </PageLayout>
    </div>
  );
};

export default Products;
