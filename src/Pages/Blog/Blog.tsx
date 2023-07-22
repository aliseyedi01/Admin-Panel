// react
import React from "react";
// component
import { PageLayout } from "@/Components";
// redux
import { useAppSelector } from "@/interface/utils";
import { BlogType } from "@/interface/blog";

const Blog: React.FC = () => {
  const blogs = useAppSelector((state) => state.blog);

  return (
    <div className="hide-scrollbar h-full overflow-y-scroll">
      <PageLayout>
        <div className="flex h-full flex-wrap dark:text-white">
          {blogs.map((blog: BlogType) => (
            <div key={blog.key} className="w-1/2 p-2 md:w-1/3 lg:w-1/4">
              <img
                src={blog.coverImage}
                alt={blog.name}
                className="-mb-[5px] w-full rounded-t-lg"
              />
              <div className="relative rounded-b-md bg-slate-100 dark:bg-indigo-950">
                <span className="svg-custom absolute -top-[50px] left-0 h-24 w-20 bg-slate-100"></span>
                <img
                  className="absolute -top-4 left-6 h-8 w-8 rounded-xl"
                  src={blog.authorImage}
                  alt={blog.author}
                />
                <p className="line-clamp-2 px-2 pt-7 font-Ubuntu">{blog.name}</p>
                <div className="flex items-center justify-between px-2 py-2 font-Lilita text-base">
                  <p className="text-blue-700 dark:text-blue-500">{blog.datePublished}</p>
                  <p className="text-red-700 dark:text-red-400">{blog.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default Blog;
