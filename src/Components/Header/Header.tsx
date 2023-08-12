// react
import React from "react";
// redux
import { Button } from "antd";
// icons
import { ChangeModeBtn } from "..";
import { FaAlignJustify } from "react-icons/fa";
import { open } from "@/store/slice/menuSlice";
import { useAppDispatch, useAppSelector } from "@/interface/utils";
import AccountBtn from "./AccountBtn";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const collapse = useAppSelector((state) => state.menu.isCollapseMenu);
  // console.log(collapse);
  const handleMenuOpen = () => {
    dispatch(open());
  };

  return (
    <header
      className={`fixed right-0 top-0 z-20 h-16 w-full bg-slate-200 bg-opacity-20 backdrop-blur-lg transition-all duration-0 dark:bg-indigo-950/[0.2]  ${
        collapse ? "md:w-[calc(100vw-242px)]" : "md:w-[calc(100vw-79px)]"
      }`}
    >
      <div className=" mx-auto flex h-16 w-full  items-center justify-between px-5 ">
        {/* collapse menu */}
        <div>
          <Button
            type="ghost"
            onClick={handleMenuOpen}
            className="mr-2  md:hidden"
            icon={<FaAlignJustify className="dark:text-white" />}
          />
        </div>
        {/* Right Header */}
        <div className="flex items-center gap-2">
          {/* darkMode */}
          <ChangeModeBtn />
          {/* Account */}
          <AccountBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
