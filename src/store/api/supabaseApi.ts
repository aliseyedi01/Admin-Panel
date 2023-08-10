import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/utils/initSupabase";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
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
    getProducts: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("products").select();
        if (error) {
          console.log("err product supabase api", error);
          throw error;
        }
        return { data };
      },
    }),
  }),
});

export const { useGetBlogsQuery, useGetProductsQuery } = supabaseApi;
