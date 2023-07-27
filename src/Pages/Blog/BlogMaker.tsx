// react
import React from "react";
import { PageLayout, BackPage, BlogForm } from "@/Components";
// redux
import { useAppDispatch } from "@/interface/utils";
import { add } from "@/store/slice/blogSlice";
// antd
import { message } from "antd";

const BlogMaker: React.FC = () => {
  const dispatch = useAppDispatch();

  // handle submit form
  const onFinish = (value: any) => {
    console.log("value", value);
    const currentDate = new Date();
    const key = currentDate.getTime();
    dispatch(add({ key, ...value.blog }));
    message.success(`${value.blog.name} : added successfully`);
  };

  return (
    <PageLayout>
      <BackPage />
      <BlogForm onSubmit={onFinish} />
    </PageLayout>
  );
};

export default BlogMaker;
