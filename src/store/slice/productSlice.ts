// redux
import { Gender, ProductState } from "@/interface/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = [
  {
    key: "1",
    name: "Nike Waffle Racer Crater",
    price: 10.99,
    description: "This is the first product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    sale: false,
    new: true,
    gender: Gender.Men,
    remaining: 10,
  },
  {
    key: "2",
    name: "Air Jordan XXXV PF",
    price: 19.99,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_2.jpg",
    sale: true,
    new: false,
    gender: Gender.Women,
    priceOff: 15.99,
    remaining: 5,
  },
  {
    key: "3",
    name: "Nike Air Zoom Tempo NEXT%",
    price: 39.99,
    description: "This is the third product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_3.jpg",
    sale: false,
    new: false,
    gender: Gender.Women,
    remaining: 8,
  },
  {
    key: "4",
    name: "Nike Air Force 1 07 LX",
    price: 60.12,
    description: "This is the fourth product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_4.jpg",
    sale: false,
    new: true,
    gender: Gender.Women,
    remaining: 3,
  },
  {
    key: "5",
    name: "Adidas Superstar",
    price: 79.99,
    description: "This is the fifth product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_5.jpg",
    sale: false,
    new: false,
    gender: Gender.Men,
    remaining: 12,
  },
  {
    key: "6",
    name: "Puma Cali Wedge",
    price: 99.99,
    description: "This is the sixth product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_6.jpg",
    sale: true,
    new: true,
    gender: Gender.Women,
    priceOff: 79.99,
    remaining: 20,
  },
  {
    key: "7",
    name: "Converse Chuck Taylor All Star",
    price: 49.99,
    description: "This is the seventh product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_7.jpg",
    sale: false,
    new: false,
    gender: Gender.Men,
    remaining: 17,
  },
  {
    key: "8",
    name: "Vans Old Skool",
    price: 64.99,
    description: "This is the eighth product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_8.jpg",
    sale: true,
    new: false,
    gender: Gender.Women,
    priceOff: 54.99,
    remaining: 9,
  },
  {
    key: "9",
    name: "Reebok Classic Leather",
    price: 69.99,
    description: "This is the ninth product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_9.jpg",
    sale: false,
    new: true,
    gender: Gender.Men,
    remaining: 14,
  },
  {
    key: "10",
    name: "New Balance 574",
    price: 89.99,
    description: "This is the tenth product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    sale: false,
    new: false,
    gender: Gender.Women,
    remaining: 6,
  },
  {
    key: "11",
    name: "Nike Waffle Racer Crater",
    price: 10.99,
    description: "This is the first product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_11.jpg",
    sale: false,
    new: true,
    gender: Gender.Men,
    remaining: 10,
  },
  {
    key: "12",
    name: "Air Jordan XXXV PF",
    price: 19.99,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_12.jpg",
    sale: true,
    new: false,
    gender: Gender.Women,
    priceOff: 15.99,
    remaining: 5,
  },
  {
    key: "13",
    name: "Nike Air Zoom Tempo NEXT%",
    price: 39.99,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg",
    sale: false,
    new: false,
    gender: Gender.Women,
    remaining: 8,
  },
  {
    key: "14",
    name: "Nike Air Force 1 07 LX",
    price: 60.12,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_14.jpg",
    sale: false,
    new: true,
    gender: Gender.Women,
    remaining: 3,
  },
];

const productSlice = createSlice({
  name: "blogs",
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
