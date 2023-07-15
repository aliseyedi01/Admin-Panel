// react
import React from "react";
// redux
import { useSelector } from "react-redux";

const Products: React.FC = () => {
  // redux
  const product = useSelector((state) => state.product);
  console.log(product);
  return <div className="p-5">Products</div>;
};

export default Products;
