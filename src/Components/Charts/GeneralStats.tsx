// react
import React from "react";
// component
import { CountUp } from "@/Components";
import UserBar from "./UserBar";
import PostArea from "./PostArea";
import ProductSpline from "./ProductSpline";
import CircleOrder from "./CircleOrder";
// icons
import {
  AiOutlineTeam,
  AiOutlineShoppingCart,
  AiOutlineProfile,
  AiOutlineGift,
} from "react-icons/ai";

const dashboardStats: {
  title: string;
  number: number;
  icon: JSX.Element;
  chart?: JSX.Element | undefined;
}[] = [
  { title: "Products", number: 6904, icon: <AiOutlineShoppingCart />, chart: <ProductSpline /> },
  { title: "Users", number: 2947, icon: <AiOutlineTeam />, chart: <UserBar /> },
  { title: "Posts", number: 4032, icon: <AiOutlineProfile />, chart: <PostArea /> },
  { title: "Orders", number: 240, icon: <AiOutlineGift />, chart: <CircleOrder /> },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-2 font-Ubuntu dark:text-white md:grid-cols-3 lg:grid-cols-4">
      {dashboardStats.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-between rounded-md bg-slate-300 p-2 dark:bg-blue-950"
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2 font-Ubuntu">
              <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {item.icon}
              </span>
              <p className="justify-between font-Lemon  text-sm">{item.title}</p>
            </div>
            <CountUp
              end={item.number}
              duration={2000}
              className="-translate-y-1 font-Montserrat text-xl"
            />
          </div>
          <div className="w-full">{item.chart}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
