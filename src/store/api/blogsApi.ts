import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/utils/initSupabase";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("blogs").select();
        if (error) {
          throw error;
        }
        return { data };
      },
    }),
    editBlog: builder.query({
      queryFn: async (props) => {
        const { data, error } = await supabase
          .from("blogs")
          .update(props.updateBlog)
          .eq("key", props.key)
          .select();

        if (error) {
          console.log("err-api-update-blogs", error);
        }
        return { data };
      },
    }),
  }),
});

export const { useGetBlogsQuery, useEditBlogQuery } = blogsApi;
