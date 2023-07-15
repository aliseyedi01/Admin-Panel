import { Gender, ProductState } from "@/interface/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = [
  {
    key: "1",
    name: "Nike Waffle Racer Crater",
    price: 10.99,
    description: "This is the first product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    sale: false,
    new: true,
    gender: Gender.Men,
    remaining: 10, // Set the remaining number of Product 1
  },
  {
    key: "2",
    name: "Air Jordan XXXV PF",
    price: 19.99,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_5.jpg",
    sale: true,
    new: false,
    gender: Gender.Women,
    priceOff: 15.99,
    remaining: 5, // Set the remaining number of Product 2
  },
  {
    key: "3",
    name: "Nike Air Zoom Tempo NEXT%",
    price: 39.99,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_15.jpg",
    sale: false,
    new: false,
    gender: Gender.Women,
    remaining: 8, // Set the remaining number of Product 3
  },
  {
    key: "4",
    name: "Nike Air Force 1 07 LX",
    price: 60.12,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg",
    sale: false,
    new: true,
    gender: Gender.Women,
    remaining: 3, // Set the remaining number of Product 4
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    remove: (state, action) => {
      const key = action.payload;
      return state.filter((product) => product.key !== key);
    },
    add: (state, action) => {
      const newProduct = action.payload;
      return [...state, newProduct];
    },
    edit: (state, action) => {
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

export const { remove, add, edit } = productSlice.actions;

export default productSlice.reducer;
