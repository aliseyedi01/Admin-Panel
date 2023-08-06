// react
import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
// redux
import { close, toggle } from "@/store/slice/menuSlice";
// hook
import useHideClickOutside from "@/Hooks/useHideClickOutside";
import { useAppDispatch, useAppSelector } from "@/interface/utils";

interface Page {
  id: number;
  name: string;
  icon: any;
}

const Pages: Page[] = [
  { id: 1, name: "Dashboard", icon: <FaUserAlt /> },
  { id: 2, name: "Users", icon: <FaPoll /> },
  { id: 3, name: "Products", icon: <FaShoppingCart /> },
  { id: 4, name: "Blogs", icon: <FaBloggerB /> },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Active Page
  const location = useLocation();
  const activePath = location.pathname.split("/")[1];

  // redux
  const menuOpen = useAppSelector((state) => state.menu.isOpenMenu);

  // hidden menu in outSide clicked
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleHideSidebar = () => {
    dispatch(close());
  };
  useHideClickOutside(sidebarRef, handleHideSidebar);

  return (
    <>
      {/* background blur */}
      <div
        className={`fixed left-0 top-0 z-10  h-full w-full bg-slate-600/[.2] backdrop-blur-sm  ${
          menuOpen ? "" : "hidden"
        }`}
        onClick={() => dispatch(close())}
      ></div>
      {/* sidebar */}
      <aside
        ref={sidebarRef}
        className={`surface flex h-full flex-col items-center gap-4 py-4 transition-all duration-500   ${
          collapsed ? "w-20" : "w-72"
        } ${menuOpen ? "absolute z-50 w-48" : "hidden md:flex"}`}
      >
        {/* collapse button & panel's admin */}
        <Button
          onClick={() => {
            setCollapsed(!collapsed);
            dispatch(toggle());
          }}
          className="absolute z-40 translate-x-4 self-end rounded-md border-2 border-sky-200 bg-transparent pb-7 text-lg dark:text-yellow-300 max-md:hidden"
          icon={!collapsed ? <FaChevronLeft /> : <FaChevronRight />}
        />
        <h2 className=" flex items-center gap-3 self-center font-Lemon text-base  dark:text-white md:text-xl">
          <FaDesktop className="text-2xl" /> {!collapsed ? " Admin Panel" : null}
        </h2>
        {/* pages name */}
        <div className="mt-2 w-full pl-2">
          {Pages.map((page) => (
            <Link
              key={page.id}
              to={page.name.toLowerCase()}
              className="flex w-full items-center justify-center gap-3 no-underline"
            >
              <div
                className={`my-[1px] flex h-8 w-full  items-center gap-3  duration-0 hover:text-indigo-700  hover:dark:text-white ${
                  page.name.toLowerCase() == activePath
                    ? " border-r-4 border-blue-600 pl-1 text-blue-600 dark:border-white dark:text-white"
                    : "border-blue-500"
                } ${!collapsed ? "justify-start pl-0" : "justify-center"} `}
              >
                <div className="translate-x-1">{page.icon}</div>
                <div className="font-Montserrat">{!collapsed || menuOpen ? page.name : null}</div>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
