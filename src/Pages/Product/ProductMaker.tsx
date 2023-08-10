// react
import React from "react";
// components
import { BackPage, PageLayout } from "@/Components";
// antd
import { message } from "antd";
// redux
import { useDispatch } from "react-redux/es/exports";
import { addProducts } from "@/store/slice/productSlice";
// types
import ProductForm from "@/Components/Products/ProductForm";

const ProductMaker: React.FC = () => {
  const dispatch = useDispatch();

  // submit product
  const onFinish = (value: any) => {
    const currentDate = new Date();
    const key = currentDate.getTime();
    dispatch(addProducts({ key, ...value.product }));
    message.success(`${value.product.name} added successfully`);
  };

  return (
    <PageLayout>
      <BackPage />
      <ProductForm onSubmit={onFinish} />
    </PageLayout>
  );
};

export default ProductMaker;
