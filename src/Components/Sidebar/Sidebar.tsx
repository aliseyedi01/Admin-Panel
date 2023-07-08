import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FaUserAlt, FaPoll, FaShoppingCart, FaBloggerB } from "react-icons/fa";

interface Page {
  id: number;
  name: string;
  icon: any;
}

const Pages: Page[] = [
  { id: 1, name: "Dashboard", icon: <FaUserAlt /> },
  { id: 2, name: "User", icon: <FaPoll /> },
  { id: 3, name: "Products", icon: <FaShoppingCart /> },
  { id: 4, name: "Blog", icon: <FaBloggerB /> },
];

const Sidebar = () => {
  return (
    <div className="surface flex h-full w-[20%] flex-col items-center gap-4 py-4">
      <h2 className="self-center">Admin Panel</h2>
      <div className="w-full px-2">
        {Pages.map((page) => (
          <Link
            key={page.id}
            to={page.name.toLowerCase()}
            className="flex w-full items-center justify-center gap-2 no-underline"
          >
            <Button
              type="primary"
              className="my-[1px] flex h-8 w-full items-center gap-2 bg-blue-500"
            >
              {page.icon} {page.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
