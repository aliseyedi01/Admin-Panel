// react
import React from "react";
// charts
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// types
import { useAppSelector } from "@/interface/utils";

const PostArea: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);

  const options = {
    chart: {
      type: "areaspline",
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
        data: [
          209, 200, 180, 150, 140, 130, 150, 160, 170, 190, 200, 220, 222, 224, 190, 180, 170, 200,
          190,
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
        className: `rounded-md h-32 fill-transparent overflow-hidden  w-full ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default PostArea;
