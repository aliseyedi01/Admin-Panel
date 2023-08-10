// redux
import { ProductState } from "@/interface/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log("add products", action.payload);
      return [...state, ...action.payload];
    },
    removeProduct: (state, action) => {
      const key = action.payload;
      return state.filter((product) => product.key !== key);
    },
    newProduct: (state, action) => {
      const newProduct = action.payload;
      return [...state, newProduct];
    },
    editProduct: (state, action) => {
      const updatedProduct = action.payload;
      return state.map((product) => {
        if (product.key === updatedProduct.key) {
          return { ...product, ...updatedProduct };
        }
        return product;
      });
    },
  },
});

export const { addProducts, removeProduct, newProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
