import React from "react";
import { Button } from "antd";

interface Page {
  id: number;
  name: string;
}

const Pages: Page[] = [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "User" },
  { id: 3, name: "Product" },
  { id: 4, name: "Blog" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="surface flex h-full w-[20%] flex-col items-center gap-4 py-4">
      <h2 className="self-center">Admin Panel</h2>
      <div className="w-full px-2">
        {Pages.map((page) => (
          <Button key={page.id} type="primary" className=" my-[1px] h-8 w-full bg-blue-500   ">
            {page.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
