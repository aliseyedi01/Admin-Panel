import { BlogState } from "@/interface/blog";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogState = [
  {
    key: "1",
    name: "Name blog 1",
    description: "This is the a sample blog 1",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    new: true,
    category: "sport",
    author: "john smit",
  },
  {
    key: "2",
    name: "Name blog 2",
    description: "This is the a sample blog 2",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    new: true,
    category: "Scientific",
    author: "ali seyedi",
  },
  {
    key: "3",
    name: "Name blog 3",
    description: "This is the a sample blog 3",
    image: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    new: true,
    category: "cultural",
    author: "hamid sori",
  },
];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    remove: (state, action) => {
      const key = action.payload;
      return state.filter((blog) => blog.key !== key);
    },
    add: (state, action) => {
      const newBlog = action.payload;
      return [...state, newBlog];
    },
    edit: (state, action) => {
      const updatedBlog = action.payload;
      return state.map((blog) => {
        if (blog.key === updatedBlog.key) {
          return { ...blog, ...updatedBlog };
        }
        return blog;
      });
    },
  },
});

export const { remove, add, edit } = blogSlice.actions;

export default blogSlice.reducer;
