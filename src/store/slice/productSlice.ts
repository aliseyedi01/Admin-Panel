import { createSlice } from "@reduxjs/toolkit";

enum Gender {
  Men = "men",
  Women = "women",
  Kids = "kids",
}

interface Product {
  key: string;
  name: string;
  price: number;
  description: string;
  image: string;
  sale: boolean;
  new: boolean;
  gender: Gender;
  priceOff?: number;
}

type ProductState = Product[];

const initialState: ProductState = [
  {
    key: "1",
    name: "Product 1",
    price: 10.99,
    description: "This is the first product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_10.jpg",
    sale: false,
    new: true,
    gender: Gender.Men, // Set the gender category for Product 1
  },
  {
    key: "2",
    name: "Product 2",
    price: 19.99,
    description: "This is the second product.",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_5.jpg",
    sale: false,
    new: false,
    gender: Gender.Women, // Set the gender category for Product 2
    priceOff: 15.99,
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
    setSale: (state, action) => {
      const { key, sale } = action.payload;
      return state.map((product) => {
        if (product.key === key) {
          return { ...product, sale };
        }
        return product;
      });
    },
    setNew: (state, action) => {
      const { key, isNew } = action.payload;
      return state.map((product) => {
        if (product.key === key) {
          return { ...product, new: isNew };
        }
        return product;
      });
    },
    setGender: (state, action) => {
      const { key, gender } = action.payload;
      return state.map((product) => {
        if (product.key === key) {
          return { ...product, gender };
        }
        return product;
      });
    },
    setPriceOff: (state, action) => {
      const { key, priceOff } = action.payload;
      return state.map((product) => {
        if (product.key === key) {
          return { ...product, priceOff };
        }
        return product;
      });
    },
  },
});

export const { remove, add, edit } = productSlice.actions;

export default productSlice.reducer;
