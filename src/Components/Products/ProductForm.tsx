// react
import React from "react";
// antd
import { Form, InputNumber, Input, Button, Select } from "antd";
// types
import { Gender } from "@/interface/product";

const { Option } = Select;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ProductForm: React.FC<{
  initialValues?: any;
  onSubmit: (value: any) => void;
}> = ({ initialValues = {}, onSubmit }) => {
  const [form] = Form.useForm();

  const initialvalue = {
    product: {
      ...initialValues,
    },
  };
  // console.log(initialvalue);

  // handle submit form
  const onFinish = (value: any) => {
    onSubmit(value);
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
      {/* Name */}
      <Form.Item
        name={["product", "name"]}
        label={<label className="text-red-900 dark:text-white">Name</label>}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      {/* Price */}
      <Form.Item
        name={["product", "price"]}
        label={<label className="text-red-900 dark:text-white">Price</label>}
        rules={[{ required: true, type: "number", min: 0, max: 9999 }]}
      >
        <InputNumber />
      </Form.Item>
      {/* Description */}
      <Form.Item
        name={["product", "description"]}
        label={<label className="text-red-900 dark:text-white">Description</label>}
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      {/* Image */}
      <Form.Item
        name={["product", "image"]}
        label={<label className="text-red-900 dark:text-white">Image</label>}
        rules={[{ required: true, type: "url" }]}
      >
        <Input />
      </Form.Item>
      {/* Gender */}
      <Form.Item
        name={["product", "gender"]}
        label={<label className="text-red-900 dark:text-white">Gender</label>}
        hasFeedback
        rules={[{ required: true, message: "Select Gender!" }]}
      >
        <Select placeholder="Select Gender">
          <Option value={Gender.Men}>Men</Option>
          <Option value={Gender.Women}>Women</Option>
          <Option value={Gender.Kids}>Kids</Option>
        </Select>
      </Form.Item>
      {/* Remaining */}
      <Form.Item
        name={["product", "remaining"]}
        label={<label className="text-red-900 dark:text-white">Remaining</label>}
        rules={[{ required: true, type: "number", min: 0, max: 999 }]}
      >
        <InputNumber />
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

export default ProductForm;
