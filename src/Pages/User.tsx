import React from "react";
import { useState } from "react";
// ant design
import { Space, Table, Avatar, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
// icons design
import { FaUserEdit, FaUserMinus } from "react-icons/fa";
// state management
import { useSelector } from "react-redux/es/exports";
import { DataType } from "@/interface/user";
// modal
import RemoveUserModal from "@/Components/Modal/RemoveUserModal";
import { Link } from "react-router-dom";

const User: React.FC = () => {
  // redux
  const users = useSelector((state) => state.users);
  // remove user
  const [userRemoved, setUserRemoved] = useState<DataType | null>(null);
  const handleRemoveUser = (user: DataType) => {
    setUserRemoved(user);
  };
  // Edit user
  // const [userEdit, setUserEdit] = useState<DataType | null>(null);
  // const handleEditUser = (user: DataType) => {

  //   setUserEdit(user);
  //   console.log(userEdit);
  // };

  // column of table
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
            <Link to={`/user/${user.key}`}>
              <FaUserEdit className="text-lg text-indigo-800 dark:text-indigo-500" />
            </Link>
          </Tooltip>
          <Tooltip title="Remove User">
            <a onClick={() => handleRemoveUser(user)}>
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
        dataSource={users}
        pagination={{
          pageSize: 5,
        }}
        className="!dark:text-white dark:bg-slate-700"
      />
      {userRemoved && <RemoveUserModal user={userRemoved} />}
    </div>
  );
};

export default User;
