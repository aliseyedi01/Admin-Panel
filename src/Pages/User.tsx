import React, { useState } from "react";
// ant design
import { Space, Table, Avatar, Tag, Tooltip, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
// icons design
import { FaUserEdit, FaUserMinus } from "react-icons/fa";
// state management
import { useSelector, useDispatch } from "react-redux/es/exports";
import { DataType } from "@/interface/user";
import { remove } from "@/store/slice/userSlice";

const User: React.FC = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");

  const handleRemoveUser = (userId: string, userName: string) => {
    setOpen(true);
    setModalText(`are you sure to remove ${selectedUserName} ?`);
    setSelectedUserId(userId);
    setSelectedUserName(userName);
  };

  const handleOk = () => {
    setModalText(`Permanently Removing  : ${selectedUserName}`);
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(remove(selectedUserId));
      setOpen(false);
      setConfirmLoading(false);
    }, 3000);
  };

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
            <a onClick={() => handleRemoveUser(user.key, user.name)}>
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
      <Modal
        title="Remove User"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
      >
        <p className="text-base">{modalText}</p>
      </Modal>
    </div>
  );
};

export default User;
