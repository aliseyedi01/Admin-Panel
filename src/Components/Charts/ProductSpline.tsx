import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppSelector } from "@/interface/utils";

const ProductSpline: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);

  const options = {
    chart: {
      type: "spline",
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
          130, 140, 150, 160, 200, 220, 190, 180, 160, 190, 200, 150, 140, 130, 110, 150, 170, 210,
          230,
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
        className: ` !stroke-6 rounded-md h-32 fill-transparent overflow-hidden  w-full ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default ProductSpline;
