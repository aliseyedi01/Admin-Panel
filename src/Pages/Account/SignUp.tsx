import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const SignUp: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="grid h-full place-content-center">
      <Form
        // {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ residence: ["zhejiang", "hangzhou", "xihu"], prefix: "86" }}
        scrollToFirstError
        className="max-w-11/12 mx-auto my-auto h-full w-[300px] md:w-[450px] "
      >
        {/* title */}
        <div className="mb-4 text-center">
          <h2 className="font-Ubuntu text-xl font-bold">Sign Up</h2>
        </div>
        {/* user name */}
        <Form.Item
          name="username"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: "Please input your username!", whitespace: true }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        {/* email */}
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        {/* password */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {/* confirm password */}
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The new password that you entered do not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        {/* agreement */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        {/* submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-600">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
