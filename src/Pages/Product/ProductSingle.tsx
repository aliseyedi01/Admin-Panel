// react
import React from "react";
import { useParams } from "react-router-dom";
// components
import { BackPage, PageLayout } from "@/Components";
import ProductForm from "@/Components/Products/ProductForm";
// antd
import { message } from "antd";
import { editProduct } from "@/store/slice/productSlice";
// redux
import { useDispatch } from "react-redux";

// types
import { useAppSelector } from "@/interface/utils";

const ProductSingle: React.FC = () => {
  const dispatch = useDispatch();
  // get product for edit
  const param = useParams();
  const products = useAppSelector((state) => state.product);
  const editProduct = products.find((product) => product.key === param.ProductId)!;

  // handle submit form
  const onFinish = (value: any) => {
    const updatedProduct = { key: param.ProductId, ...value.product };
    dispatch(editProduct(updatedProduct));
    message.success(`${value.product.name} edited successfully`);
  };

  return (
    <PageLayout>
      <BackPage />
      <ProductForm initialValues={editProduct} onSubmit={onFinish} />
    </PageLayout>
  );
};

export default ProductSingle;
