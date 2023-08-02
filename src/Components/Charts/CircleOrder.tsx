import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "@/interface/utils";

const CircleOrder: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);
  const options = {
    chart: {
      type: "pie",
      styledMode: true,
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      spacing: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -0,
          style: {
            color: "white",
            fontSize: "12px",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["45%", "120%"],
        size: "210%",
        innerSize: "60%",
      },
    },
    series: [
      {
        data: [
          ["Received", 70],
          ["Pending", 30],
        ],
        marker: {
          enabled: false,
        },
        showInLegend: false,
        stacking: false,
        enableMouseTracking: false,
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        className: `rounded-md fill-transparent h-32 overflow-hidden w-full ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default CircleOrder;
