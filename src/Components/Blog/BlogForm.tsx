import React from "react";
import { Button, Form, Input, Select, Switch, DatePicker } from "antd";
import { Option } from "antd/es/mentions";
import dayjs from "dayjs";

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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

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

const BlogForm: React.FC<{
  initialValues?: any;
  onSubmit: (value: any) => void;
}> = ({ initialValues = {}, onSubmit }) => {
  const [form] = Form.useForm();

  const { datePublished, ...restInitialValues } = initialValues;
  const datePublishedValue = datePublished ? dayjs(datePublished, "YYYY-MM-DD") : undefined;

  const initialvalue = {
    blog: {
      ...restInitialValues,
    },
  };

  const onFinish = (value: any) => {
    // Format the datePublished value before submitting
    const formattedDatePublished = dayjs(value.blog.datePublished).format("YYYY-MM-DD");
    value.blog.datePublished = formattedDatePublished;

    onSubmit(value);
  };

  // handle change color in switch
  const [permission, setPermission] = React.useState({
    enabled: initialValues.blog?.newPublished || false,
  });

  const onPermissionChanged = (checked: boolean) => {
    setPermission({ enabled: checked });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
      initialValues={initialvalue}
    >
      {/* Name*/}
      <Form.Item
        name={["blog", "name"]}
        label={<label className="text-red-900 dark:text-white">Name</label>}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      {/* Author */}
      <Form.Item
        name={["blog", "author"]}
        label={<label className="text-red-900 dark:text-white">Author</label>}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      {/* Description */}
      <Form.Item
        name={["blog", "description"]}
        label={<label className="text-red-900 dark:text-white">Description</label>}
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      {/* Image author */}
      <Form.Item
        name={["blog", "coverImage"]}
        label={<label className="text-red-900 dark:text-white">Author Image</label>}
        rules={[{ required: true, type: "url" }]}
      >
        <Input />
      </Form.Item>
      {/* Image cover */}
      <Form.Item
        name={["blog", "authorImage"]}
        label={<label className="text-red-900 dark:text-white">Cover Image</label>}
        rules={[{ required: true, type: "url" }]}
      >
        <Input />
      </Form.Item>
      {/* Data Published */}
      <Form.Item
        name={["blog", "datePublished"]}
        label={<label className="text-red-900 dark:text-white">Date Published</label>}
        rules={[{ required: true, type: "date" }]}
        hasFeedback
      >
        <DatePicker format="YYYY-MM-DD" defaultValue={datePublishedValue} />
      </Form.Item>
      {/* Category */}
      <Form.Item
        name={["blog", "category"]}
        label={<label className="text-red-900 dark:text-white">Category</label>}
        hasFeedback
        rules={[{ required: true, message: "Select Gender!" }]}
      >
        <Select placeholder="Select Category">
          {Categories.map((category) => (
            <Option value={category} key={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/* New Published */}
      <Form.Item
        name={["blog", "newPublished"]}
        label={<label className=" text-red-900 dark:text-white">New Blog</label>}
        hasFeedback
      >
        <Switch
          checkedChildren="new"
          unCheckedChildren="old"
          style={{ backgroundColor: permission.enabled ? "#3b82f6" : "gray" }}
          checked={permission.enabled}
          onChange={onPermissionChanged}
        />
      </Form.Item>
      {/* Submit Form */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" className="bg-blue-500">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;
