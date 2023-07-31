import React from "react";
import { CountUp } from "@/Components";
import {
  AiOutlineTeam,
  AiOutlineShoppingCart,
  AiOutlineProfile,
  AiOutlineInfoCircle,
  AiOutlineFundView,
  AiOutlineShop,
  AiOutlineDollarCircle,
  AiOutlineGift,
  AiOutlineComment,
} from "react-icons/ai";

const dashboardStats: {
  title: string;
  number: number;
  icon: JSX.Element;
}[] = [
  { title: "Users", number: 2947, icon: <AiOutlineTeam /> },
  { title: "Posts", number: 4032, icon: <AiOutlineProfile /> },
  { title: "Products", number: 6904, icon: <AiOutlineShoppingCart /> },
  { title: "Sales", number: 8942, icon: <AiOutlineDollarCircle /> },
  { title: "Views", number: 12435, icon: <AiOutlineFundView /> },
  { title: "Customers", number: 102, icon: <AiOutlineShop /> },
  { title: "Orders", number: 240, icon: <AiOutlineGift /> },
  { title: "Comments", number: 8674, icon: <AiOutlineComment /> },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2 font-Ubuntu dark:text-white md:grid-cols-3 lg:grid-cols-4">
      {dashboardStats.map((item, i) => (
        <div key={i} className="flex flex-col rounded-md bg-slate-300 p-3 dark:bg-blue-950">
          <div className="flex items-center justify-between font-Lemon text-sm">
            <div>{item.title}</div>

            <div className="cursor-pointer text-xl font-bold text-blue-700" title="Info ... ">
              <AiOutlineInfoCircle />
            </div>
          </div>
          <div className="flex items-center gap-3 font-Ubuntu">
            <div className="text-2xl font-bold text-blue-700">{item.icon}</div>
            <CountUp
              end={item.number}
              duration={2000}
              className="-translate-y-1 font-Montserrat text-xl"
            />
          </div>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
