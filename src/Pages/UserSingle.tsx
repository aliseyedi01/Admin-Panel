// react
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// icon
import { IoChevronBack } from "react-icons/io5";
// antd
import { Form, InputNumber, Tooltip, Input, Button, Select, message } from "antd";
// redux
import { useDispatch, useSelector } from "react-redux/es/exports";
import { DataType } from "@/interface/user";
import { edit } from "@/store/slice/userSlice";

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

const UserSingle: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // message
  const [messageApi, contextHolder] = message.useMessage();
  // get indent user for edit
  const param = useParams();
  const users = useSelector((state) => state.users);
  const editUser = users.find((user: DataType) => user.key === param.userId);
  const { name, email, age, role, status } = editUser;

  // handle submit form
  const onFinish = (value: any) => {
    const updatedUser = { key: param.userId, ...value.user };
    dispatch(edit(updatedUser));
    messageApi.open({
      type: "success",
      content: `${value.user.name} edited successfully`,
    });
  };

  return (
    <div className="p-5">
      {contextHolder}
      <Tooltip title="Back">
        <Button
          className="mb-5"
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
          initialValue={name}
        >
          <Input />
        </Form.Item>
        {/* Email User */}
        <Form.Item
          name={["user", "email"]}
          label={<label className="text-red-900 dark:text-white ">Email</label>}
          rules={[{ required: true, type: "email" }]}
          initialValue={email}
        >
          <Input />
        </Form.Item>
        {/* Age User */}
        <Form.Item
          name={["user", "age"]}
          label={<label className="text-red-900 dark:text-white ">Age</label>}
          rules={[{ required: true, type: "number", min: 0, max: 99 }]}
          initialValue={age}
        >
          <InputNumber />
        </Form.Item>
        {/* Role User */}
        <Form.Item
          name={["user", "role"]}
          label={<label className="text-red-900 dark:text-white ">Role</label>}
          hasFeedback
          initialValue={role}
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
          initialValue={status}
        >
          <Select placeholder="Select Status User">
            <Option value="active">Active</Option>
            <Option value="inactive">InActive</Option>
            <Option value="banned">Banned</Option>
          </Select>
        </Form.Item>
        {/* Submit Form */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserSingle;
