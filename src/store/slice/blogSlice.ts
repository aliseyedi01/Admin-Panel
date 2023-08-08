import { BlogState } from "@/interface/blog";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogState = [];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogs: (state, action) => {
      return [...state, ...action.payload];
    },
    removeBlog: (state, action) => {
      const key = action.payload;
      return state.filter((blog) => blog.key !== key);
    },
    newBlog: (state, action) => {
      const newBlog = action.payload;
      return [...state, newBlog];
    },
    editBlog: (state, action) => {
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

// export for use in component
export const { addBlogs, removeBlog, newBlog, editBlog } = blogSlice.actions;
// export for use in store
export default blogSlice.reducer;
