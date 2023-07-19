// react
import React from "react";
// component
import { PageLayout } from "@/Components";
// redux
import { useAppSelector } from "@/interface/utils";
import { BlogType } from "@/interface/blog";

const Blog: React.FC = () => {
  const blogs = useAppSelector((state) => state.blog);
  console.log(blogs);
  return (
    <PageLayout>
      <p className="dark:text-white">Blog</p>
      <div className="flex h-full flex-wrap   dark:text-white">
        {blogs.map((blog: BlogType) => (
          <div key={blog.key} className=" group relative w-1/2 p-2 md:w-1/3 lg:w-1/4">
            <img
              src={blog.image}
              alt={blog.name}
              className=" relative -mb-[5px] w-full rounded-t-lg "
            />
            <div>{blog.description}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Blog;
