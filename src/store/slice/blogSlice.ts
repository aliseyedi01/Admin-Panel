import { BlogState } from "@/interface/blog";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogState = [
  {
    key: "1",
    name: "Name blog 1",
    description: "This is the a sample blog 1",
    new: true,
    datePublished: "2023-01-01",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    category: "sport",
    author: "john smit",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "2",
    name: "Name blog 2",
    description: "This is the a sample blog 2",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    new: true,
    datePublished: "2023-01-01",
    category: "Scientific",
    author: "ali seyedi",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "3",
    name: "Name blog 3",
    description: "This is the a sample blog 3",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    new: true,
    datePublished: "2023-01-01",
    category: "cultural",
    author: "hamid sori",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
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
