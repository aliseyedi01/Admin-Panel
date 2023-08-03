import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "@/interface/utils";

import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

const SpendingRadar: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);
  const options = {
    chart: {
      type: "line",
      polar: true,
      styledMode: true,
      events: {
        mousewheel: function (e) {
          e.preventDefault();
        },
        DOMMouseScroll: function (e) {
          e.preventDefault();
        },
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Budget vs Spending",
    },
    pane: {
      size: "80%",
      lineWidth: 0,
      background: null,
    },
    xAxis: {
      gridLineWidth: 0,
      categories: [
        "Sales",
        "Marketing",
        "Development",
        "Customer Support",
        "Information Technology",
        "Administration",
      ],
      tickmarkPlacement: "on",
      lineWidth: 0,
    },
    yAxis: {
      gridLineInterpolation: "polygon",
      tickmarkPlacement: "on",
      lineWidth: 9.2,
      min: 0,
    },
    tooltip: {
      shared: true,
      pointFormat: "<span >{series.name}: <b>${point.y:,.0f}</b><br/>",
    },
    series: [
      {
        name: "Allocated Budget",
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: "on",
      },
      {
        name: "Actual Spending",
        data: [50000, 39000, 42000, 31000, 26000, 14000],
        pointPlacement: "on",
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        className: `!rounded-md overflow-hidden fill-transparent inline-block my-2 w-full md:w-1/3
         ${isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"}`,
      }}
    />
  );
};

export default SpendingRadar;
