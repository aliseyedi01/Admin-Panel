// react
import React from "react";
import { useNavigate } from "react-router-dom";
// icon
import { IoChevronBack } from "react-icons/io5";
// antd
import { Form, InputNumber, Tooltip, Input, Button, Select, message } from "antd";
// redux
import { useDispatch } from "react-redux/es/exports";
import { add } from "@/store/slice/userSlice";
import { PageLayout } from "@/Components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

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

const UserMaker: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // message
  const [messageApi, contextHolder] = message.useMessage();
  // submit user
  const onFinish = (value: any) => {
    const currentDate = new Date();
    const key = currentDate.getTime(); // Generate key based on current date
    dispatch(add({ key, ...value.user }));
    messageApi.open({
      type: "success",
      content: `${value.user.name} added successfully`,
    });
  };

  return (
    <PageLayout>
      {contextHolder}
      <Tooltip title="Back">
        <Button
          className="mb-5 bg-blue-500"
          type="primary"
          icon={<IoChevronBack />}
          onClick={() => navigate(-1)}
        />
      </Tooltip>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        {/* Name User */}
        <Form.Item
          name={["user", "name"]}
          label={<label className="text-red-900  dark:text-white ">Name</label>}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        {/* Email User */}
        <Form.Item
          name={["user", "email"]}
          label={<label className="text-red-900 dark:text-white ">Email</label>}
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        {/* Age User */}
        <Form.Item
          name={["user", "age"]}
          label={<label className="text-red-900 dark:text-white ">Age</label>}
          rules={[{ required: true, type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        {/* Role User */}
        <Form.Item
          name={["user", "role"]}
          label={<label className="text-red-900 dark:text-white ">Role</label>}
          hasFeedback
          rules={[{ required: true, message: "Select Role User!" }]}
        >
          <Select placeholder="Select Role User">
            <Option value="front-end">Front-End</Option>
            <Option value="back-end">Back-End</Option>
          </Select>
        </Form.Item>
        {/* Status User */}
        <Form.Item
          name={["user", "status"]}
          label={<label className="text-red-900 dark:text-white ">Status</label>}
          hasFeedback
          rules={[{ required: true, message: "Select Status User!" }]}
        >
          <Select placeholder="Select Status User">
            <Option value="active">Active</Option>
            <Option value="inactive">InActive</Option>
            <Option value="banned">Banned</Option>
          </Select>
        </Form.Item>
        {/* Submit Form */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  );
};

export default UserMaker;
