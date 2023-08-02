import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "@/interface/utils";

const UserBar: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);
  const options = {
    chart: {
      type: "column",
      styledMode: true,
      spacing: [0, 0, 0, 0],
      marginTop: 0,
      spacingTop: 0,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    yAxis: {
      visible: false,
      maxPadding: 0,
      startOnTick: false,
      minPadding: 0,
      min: 0,
    },
    xAxis: {
      visible: false,
    },
    series: [
      {
        data: [5, 3, 7, 12, 3, 2, 8, 7, 10, 3, 2, 8],
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
        className: `rounded-md h-32 fill-yellow-200 overflow-hidden  w-full ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default UserBar;
