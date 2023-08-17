// react
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// icons
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// antd
import { Button, Checkbox, Form, Input } from "antd";
// supabase
import { supabase } from "@/utils/initSupabase";

const LogIn: React.FC = () => {
  const navigate = useNavigate();

  // handle finish
  const onFinish = async (values: any) => {
    console.log("Received values LogIn: ", values);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        // Handle the error, e.g., show an error message
        console.error("Error Login :", error.message);
      } else {
        navigate("/");
        // Handle successful sign in, e.g., redirect the user
        console.log("Sign in successful!", data);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="relative grid h-full place-content-center">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="login-form max-w-11/12 mx-auto my-auto h-full w-[300px] md:w-[450px] "
      >
        {/* title */}
        <div className="mb-4 text-center">
          <h2 className="font-Ubuntu text-xl font-bold">Log In</h2>
        </div>
        {/* email */}
        <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        {/* password */}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password must have a minimum length of 6" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* remember me & forget password */}
        <Form.Item>
          <div className="flex w-full justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot text-blue-600" to="">
              Forgot password
            </Link>
          </div>
        </Form.Item>
        {/* submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-full bg-blue-600 py-1 text-base"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      {/* redirect */}
      <p className=" absolute bottom-4 left-20 inline text-center font-Ubuntu text-sm md:left-[42%] md:text-base">
        Don't Have Account ?
        <Link to="/auth/signUp" className=" ml-1 font-semibold text-red-600">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
