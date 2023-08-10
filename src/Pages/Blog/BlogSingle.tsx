// react
import React from "react";
import { useParams } from "react-router-dom";
import { PageLayout, BackPage, BlogForm } from "@/Components";
// types
import { useAppDispatch, useAppSelector } from "@/interface/utils";
import { editBlog } from "@/store/slice/blogSlice";
// antd
import { message } from "antd";

const BlogSingle: React.FC = () => {
  const dispatch = useAppDispatch();
  const param = useParams();
  const blogs = useAppSelector((state) => state.blog);
  const editProduct = blogs.find((blog) => blog.key === param.blogId)!;

  const onFinish = (value: any) => {
    // set key for update slice redux
    const updatedProduct = { key: param.blogId, ...value.blog };
    dispatch(editBlog(updatedProduct));
    // message
    message.success(`${value.blog.name} : Edited Successfully`);
  };

  return (
    <PageLayout>
      <BackPage />
      <BlogForm initialValues={editProduct} onSubmit={onFinish} />
    </PageLayout>
  );
};

export default BlogSingle;
