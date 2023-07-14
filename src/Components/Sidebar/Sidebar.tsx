// react
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// antd
import { Button } from "antd";
// icons
import {
  FaUserAlt,
  FaPoll,
  FaShoppingCart,
  FaBloggerB,
  FaChevronLeft,
  FaChevronRight,
  FaDesktop,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// ref

import { close } from "@/store/slice/menuSlice";
import useHideClickOutside from "@/Hooks/useHideClickOutside";

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

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // redux
  const menuOpen = useSelector((state) => state.menu.isOpenMenu);
  // console.log("menu", menuOpen);

  // hidden menu in outSide clicked
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleHideSidebar = () => {
    dispatch(close());
  };
  useHideClickOutside(sidebarRef, handleHideSidebar);

  return (
    <div
      ref={sidebarRef}
      className={`surface flex h-full flex-col items-center   gap-4 py-4 transition-all duration-500   ${
        collapsed ? "w-20" : "w-96"
      } ${menuOpen ? "absolute z-50 w-56" : "hidden md:flex"}`}
    >
      <Button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        className="absolute translate-x-4  self-end rounded-md border-2 border-sky-200 bg-transparent pb-7 text-lg dark:text-yellow-300 max-md:hidden"
        icon={!collapsed ? <FaChevronLeft /> : <FaChevronRight />}
      />
      <h2 className=" flex items-center gap-3 self-center font-sans text-xl dark:text-white">
        <FaDesktop className="text-2xl" /> {!collapsed ? " Admin Panel" : null}
      </h2>

      <div className="mt-2 w-full px-2">
        {Pages.map((page) => (
          <Link
            key={page.id}
            to={page.name.toLowerCase()}
            className="flex w-full items-center justify-center gap-3 no-underline"
          >
            <Button
              type="primary"
              className="my-[1px]  flex h-8 w-full items-center gap-3 bg-blue-500 "
            >
              <div className="translate-x-1">{page.icon}</div> {!collapsed ? page.name : null}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
