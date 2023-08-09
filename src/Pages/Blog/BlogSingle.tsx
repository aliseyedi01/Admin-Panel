// react
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout, BackPage, BlogForm } from "@/Components";
// types
import { useAppDispatch, useAppSelector } from "@/interface/utils";
import { editBlog } from "@/store/slice/blogSlice";
// antd
import { message } from "antd";
// api
import { useEditBlogQuery } from "@/store/api/blogsApi";
import { BlogType } from "@/interface/blog";

const BlogSingle: React.FC = () => {
  const dispatch = useAppDispatch();
  const param = useParams();
  const blogs = useAppSelector((state) => state.blog);
  const editProduct = blogs.find((blog) => blog.key === param.blogId)!;
  // state for supabase
  const [updatedBlog, setUpdatedBlog] = useState<{ blog: BlogType } | undefined>();
  const [keyBlog, setKeyBlog] = useState<string>();

  // Move the hook call here
  const { data } = useEditBlogQuery({ updateBlog: updatedBlog, key: keyBlog });

  const onFinish = (value: any) => {
    // set for api supabase
    setUpdatedBlog(value.blog);
    setKeyBlog(param.blogId);
    // set key for update slice redux
    const updatedProduct = { key: param.blogId, ...value.blog };
    dispatch(editBlog(updatedProduct));
    // message
    message.success(`${value.blog.name} : edited successfully`);
  };

  return (
    <PageLayout>
      <BackPage />
      <BlogForm initialValues={editProduct} onSubmit={onFinish} />
    </PageLayout>
  );
};

export default BlogSingle;
