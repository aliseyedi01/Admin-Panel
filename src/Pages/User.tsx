import React from "react";
import { Space, Table, Avatar, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FaUserEdit, FaUserMinus } from "react-icons/fa";

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
  role: string;
  status: string;
  avatar: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Avatar",
    key: "avatar",
    dataIndex: "avatar",
    render: (avatarUrl) => <Avatar src={avatarUrl} alt="Avatar" />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (role) => <Tag color="blue">{role}</Tag>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => <Tag color="red">{status}</Tag>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>
          <FaUserEdit className="text-lg text-indigo-800" />
        </a>
        <a>
          <FaUserMinus className="text-lg text-red-600" />
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Ali Akbari",
    age: 32,
    email: "ali.akbari@gmail.com",
    role: "Front End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "2",
    name: "Reza Davodi",
    age: 42,
    email: "reza.davodi@gmail.com",
    role: "Back End",
    status: "banned",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "3",
    name: "John Smith",
    age: 28,
    email: "john.smith@example.com",
    role: "Full Stack",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "4",
    name: "Jane Doe",
    age: 35,
    email: "jane.doe@example.com",
    role: "Front End",
    status: "inactive",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "5",
    name: "Michael Johnson",
    age: 45,
    email: "michael.johnson@example.com",
    role: "Back End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "6",
    name: "Emily Davis",
    age: 29,
    email: "emily.davis@example.com",
    role: "Front End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "7",
    name: "David Wilson",
    age: 37,
    email: "david.wilson@example.com",
    role: "Full Stack",
    status: "inactive",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "8",
    name: "Sophia Thompson",
    age: 31,
    email: "sophia.thompson@example.com",
    role: "Back End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "9",
    name: "Your Name",
    age: 27,
    email: "your.name@example.com",
    role: "Designer",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
];

const User: React.FC = () => {
  return (
    <div className="p-5">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
        className="!dark:text-white dark:bg-slate-700"
      />
    </div>
  );
};

export default User;
