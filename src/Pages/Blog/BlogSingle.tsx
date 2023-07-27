// react
import React from "react";
import { useParams } from "react-router-dom";
import { PageLayout, BackPage, BlogForm } from "@/Components";
// types
import { useAppDispatch, useAppSelector } from "@/interface/utils";
import { edit } from "@/store/slice/blogSlice";
// antd
import { message } from "antd";

const BlogSingle: React.FC = () => {
  const dispatch = useAppDispatch();
  const param = useParams();
  const blogs = useAppSelector((state) => state.blog);
  const editProduct = blogs.find((blog) => blog.key === param.blogId)!;

  // handle submit form
  const onFinish = (value: any) => {
    const updatedProduct = { key: param.blogId, ...value.blog };
    console.log(updatedProduct);
    dispatch(edit(updatedProduct));
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
