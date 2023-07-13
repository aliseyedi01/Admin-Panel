import React from "react";
// ant design
import { Space, Table, Avatar, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
// icons design
import { FaUserEdit, FaUserMinus } from "react-icons/fa";
// state management
import { useSelector } from "react-redux/es/exports";
import { DataType } from "@/interface/user";

const User: React.FC = () => {
  const user = useSelector((state) => state.user);

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
      render: (_, user) => (
        <Space size="middle">
          <Tooltip title="Edit User">
            <a>
              <FaUserEdit className="text-lg text-indigo-800 dark:text-indigo-500" />
            </a>
          </Tooltip>
          <Tooltip title="Remove User">
            <a>
              <FaUserMinus className="text-lg text-red-600" />
            </a>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-5">
      <Table
        columns={columns}
        dataSource={user}
        pagination={{
          pageSize: 5,
        }}
        className="!dark:text-white dark:bg-slate-700"
      />
    </div>
  );
};

export default User;
