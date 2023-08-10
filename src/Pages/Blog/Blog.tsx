// react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// component
import { LazyImage, NewItem, PageLayout } from "@/Components";
import RemoveProductModal from "@/Components/Modal/RemoveProductModal";
// redux
import { useAppDispatch, useAppSelector } from "@/interface/utils";
import { BlogType } from "@/interface/blog";
import { useGetBlogsQuery } from "@/store/api/supabaseApi";
import { addBlogs } from "@/store/slice/blogSlice";
// antd
import { Button, Tooltip } from "antd";
// icon
import { IoBagRemove } from "react-icons/io5";

const Blog: React.FC = () => {
  const blogs = useAppSelector((state) => state.blog);
  // console.log("blogs", blogs);

  const dispatch = useAppDispatch();
  const { data: blogsApi } = useGetBlogsQuery({});

  useEffect(() => {
    if (blogsApi) {
      const newBlogs = blogsApi.filter(
        (blogApi) => !blogs.some((blog) => blog.key === blogApi.key),
      );
      if (newBlogs.length > 0) {
        dispatch(addBlogs(newBlogs));
      }
    }
    // console.log("render useEffect");
  }, []);

  // remove blog
  const [removedBlog, setRemovedBlog] = useState<BlogType | null>(null);

  return (
    <div className="hide-scrollbar h-full overflow-y-scroll">
      <PageLayout>
        <NewItem name="Blog" path="/blog/newblog" />
        <div className="flex h-full flex-wrap dark:text-white">
          {blogs &&
            blogs.map((blog: BlogType) => (
              <div key={blog.key} className="group relative w-1/2 p-2 md:w-1/3 lg:w-1/4">
                <LazyImage
                  src={blog.coverImage}
                  alt={blog.name}
                  className="relative -mb-[5px] w-full rounded-t-lg"
                  type="blog"
                />
                <Tooltip title="Remove">
                  <Button
                    type="ghost"
                    onClick={() => setRemovedBlog(blog)}
                    className="absolute left-3 top-4 hidden group-hover:block"
                    icon={<IoBagRemove className="text-lg text-red-600" />}
                  />
                </Tooltip>
                <div className="relative rounded-b-md bg-slate-100 dark:bg-indigo-950">
                  <span className="svg-custom absolute -top-[50px] left-0 h-24 w-20 bg-slate-100  dark:bg-indigo-950"></span>
                  <img
                    className="absolute -top-4 left-6 h-8 w-8 rounded-full"
                    src={blog.authorImage}
                    alt={blog.author}
                    loading="lazy"
                  />
                  <Link
                    to={`/blog/${blog.key}`}
                    className="text-gray-900 no-underline dark:text-gray-400"
                  >
                    <p className="line-clamp-1 px-2 pt-7 font-Ubuntu">{blog.name}</p>
                  </Link>
                  <div className="flex items-center justify-between px-2 py-2 font-Lilita text-base">
                    <p className="text-blue-700 dark:text-blue-500">{blog.datePublished}</p>
                    <p className="text-red-700 dark:text-red-400">{blog.category}</p>
                  </div>
                </div>
              </div>
            ))}
          {removedBlog && <RemoveProductModal type="blog" item={removedBlog} />}
        </div>
      </PageLayout>
    </div>
  );
};

export default Blog;
