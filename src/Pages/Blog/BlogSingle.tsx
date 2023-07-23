// redux
import { useAppDispatch, useAppSelector } from "@/interface/utils";
// antd
import { Button, Form, Input, Select, message, Switch, DatePicker } from "antd";
import { Option } from "antd/es/mentions";
// react
import React from "react";
import { BackPage, PageLayout } from "@/Components";
import { edit } from "@/store/slice/blogSlice";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
// constant
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Categories: string[] = [
  "Sport",
  "Scientific",
  "Cultural",
  "Health",
  "Technology",
  "Travel",
  "Art",
  "Books",
  "Wellness",
  "Food",
  "Environment",
  "Fashion",
  "Fitness",
  "Pets",
  "Photography",
];

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    date: "${label} is not a valid date!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const BlogSingle: React.FC = () => {
  const dispatch = useAppDispatch();
  // message
  const [messageApi, contextHolder] = message.useMessage();
  // get product for edit
  const param = useParams();
  const blogs = useAppSelector((state) => state.blog);
  const editProduct = blogs.find((blog) => blog.key === param.blogId)!;
  const {
    name,
    description,
    datePublished,
    coverImage,
    category,
    author,
    authorImage,
    newPublished,
  } = editProduct;
  // handle submit form
  const onFinish = (value: any) => {
    const updatedProduct = { key: param.blogId, ...value.blog };
    console.log(updatedProduct);
    dispatch(edit(updatedProduct));
    messageApi.open({
      type: "success",
      content: `${value.blog.name} : edited successfully`,
    });
  };
  return (
    <PageLayout>
      {contextHolder}
      <BackPage />
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        {/* Name*/}
        <Form.Item
          name={["blog", "name"]}
          label={<label className="text-red-900 dark:text-white">Name</label>}
          rules={[{ required: true }]}
          initialValue={name}
        >
          <Input />
        </Form.Item>
        {/* Author */}
        <Form.Item
          name={["blog", "author"]}
          label={<label className="text-red-900 dark:text-white">Author</label>}
          rules={[{ required: true }]}
          initialValue={author}
        >
          <Input />
        </Form.Item>
        {/* Description */}
        <Form.Item
          name={["blog", "description"]}
          label={<label className="text-red-900 dark:text-white">Description</label>}
          rules={[{ required: true }]}
          initialValue={description}
        >
          <Input.TextArea />
        </Form.Item>
        {/* Image author */}
        <Form.Item
          name={["blog", "coverImage"]}
          label={<label className="text-red-900 dark:text-white">Author Image</label>}
          rules={[{ required: true, type: "url" }]}
          initialValue={coverImage}
        >
          <Input />
        </Form.Item>
        {/* Image cover */}
        <Form.Item
          name={["blog", "authorImage"]}
          label={<label className="text-red-900 dark:text-white">Cover Image</label>}
          rules={[{ required: true, type: "url" }]}
          initialValue={authorImage}
        >
          <Input />
        </Form.Item>
        {/* Data Published */}
        <Form.Item
          name={["blog", "datePublished"]}
          label={<label className="text-red-900 dark:text-white">Date Published</label>}
          rules={[{ required: false, type: "date" }]}
          hasFeedback
        >
          <DatePicker defaultValue={dayjs(datePublished, "YYYY-MM-DD")} />
        </Form.Item>
        {/* Category */}
        <Form.Item
          name={["blog", "category"]}
          label={<label className="text-red-900 dark:text-white">Category</label>}
          hasFeedback
          initialValue={category}
          rules={[{ required: true, message: "Select Gender!" }]}
        >
          <Select placeholder="Select Category">
            {Categories.map((category) => (
              <Option value={category}>{category}</Option>
            ))}
          </Select>
        </Form.Item>
        {/* New Published */}
        <Form.Item
          name={["blog", "newPublished"]}
          label={<label className="text-red-900 dark:text-white">New Blog</label>}
          hasFeedback
        >
          <Switch checkedChildren="new" unCheckedChildren="old" defaultChecked={newPublished} />
        </Form.Item>
        {/* Submit Form */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  );
};

export default BlogSingle;
