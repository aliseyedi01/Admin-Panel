// react
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// antd
import { Space, Table, Avatar, Tag, Tooltip, Button, Input } from "antd";
import type { ColumnsType, TableProps, ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
// icons
import { FaUserEdit, FaUserMinus } from "react-icons/fa";
// redux
import { DataType } from "@/interface/user";
import { useAppDispatch, useAppSelector } from "@/interface/utils";
// modal
import RemoveUserModal from "@/Components/Modal/RemoveUserModal";
import { NewItem, PageLayout } from "@/Components";

import Highlighter from "react-highlight-words";
// api
import { useGetUsersQuery } from "@/store/api/supabaseApi";
import { addUsers } from "@/store/slice/userSlice";

type DataIndex = keyof DataType;

// component users
const User: React.FC = () => {
  // redux
  const [loadingUsers, setLoadingUsers] = useState(true);
  const users = useAppSelector((state) => state.users);
  useEffect(() => {
    if (users || usersApi) {
      setLoadingUsers(false);
    } else {
      setLoadingUsers(true);
    }
  }, [users]);

  // get user of rtk query
  const dispatch = useAppDispatch();
  const { data: usersApi } = useGetUsersQuery({});

  useEffect(() => {
    if (usersApi) {
      const newBlogs = usersApi.filter(
        (usersApi) => !users.some((user) => user.key === usersApi.key),
      );
      if (newBlogs.length > 0) {
        dispatch(addUsers(newBlogs));
      }
    }
  }, [usersApi]);

  // remove user
  const [userRemoved, setUserRemoved] = useState<DataType | null>(null);
  const handleRemoveUser = (user: DataType) => {
    setUserRemoved(user);
  };

  // state of search
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  // handle search
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };
  // function when search a props
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // column of table
  const columns: ColumnsType<DataType> = [
    {
      title: "Avatar",
      key: "avatar",
      dataIndex: "avatar",
      width: "5%",
      render: (avatarUrl) => <Avatar src={avatarUrl} alt="Avatar" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <div className="dark:text-white">{text}</div>,
      width: "15%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (role) => <Tag color="blue">{role}</Tag>,
      filters: [
        {
          text: "Front-End",
          value: "Front End",
        },
        {
          text: "Back-End",
          value: "Back End",
        },
        {
          text: "Full-Stack",
          value: "Full Stack",
        },
      ],
      onFilter: (value: any, record) => record.role.indexOf(value) === 0,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => <Tag color="red">{status}</Tag>,
      filters: [
        {
          text: "Active",
          value: "active",
        },
        {
          text: "InActive",
          value: "inactive",
        },
        {
          text: "Banned",
          value: "banned",
        },
      ],
      onFilter: (value: any, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: (_, user) => (
        <Space size="middle">
          <Tooltip title="Edit User">
            <Link to={`/user/${user.key}`}>
              <FaUserEdit className="text-lg text-indigo-800  dark:text-indigo-500" />
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

  const onChange: TableProps<DataType>["onChange"] = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <PageLayout>
      <NewItem name="User" path="/user/newuser" />
      <Table
        columns={columns}
        dataSource={users}
        onChange={onChange}
        loading={loadingUsers}
        pagination={{
          pageSize: 5,
        }}
        className="!dark:text-white dark:bg-slate-400"
      />
      {userRemoved && <RemoveUserModal user={userRemoved} />}
    </PageLayout>
  );
};

export default User;
