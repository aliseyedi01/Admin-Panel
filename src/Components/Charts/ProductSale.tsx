// react
import React from "react";
// highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HCExporting from "highcharts/modules/exporting";
import drilldown from "highcharts/modules/drilldown";
HCExporting(Highcharts);
drilldown(Highcharts);
// redux
import { useAppSelector } from "@/interface/utils";

const ProductSale: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);

  const options = {
    chart: {
      type: "pie",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Top Sell in Gender & Type",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format:
            '<span style="font-size: 12px; text-decoration : none !important ;  color: ' +
            (isDarkModeEnabled ? "#f4f4c2" : "#1c326c") +
            ';">{point.name}</span>',
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
    series: [
      {
        name: "Products",
        type: "pie",
        colorByPoint: true,
        data: [
          {
            name: "Women",
            y: 45,
            drilldown: "Women",
          },
          {
            name: "Men",
            y: 30,
            drilldown: "Men",
          },
          {
            name: "Kids",
            y: 25,
            drilldown: "Kids",
          },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "Women",
          id: "Women",
          data: [
            ["Tops", 25],
            ["Dresses", 15],
            ["Shoes", 5],
            ["Bags", 10],
            ["Accessories", 10],
          ],
        },
        {
          name: "Men",
          id: "Men",
          data: [
            ["Shirts", 15],
            ["Jeans", 10],
            ["Sneakers", 5],
            ["Watches", 8],
            ["Hats", 7],
          ],
        },
        {
          name: "Kids",
          id: "Kids",
          data: [
            ["Toys", 12],
            ["Clothing", 8],
            ["Books", 5],
            ["Games", 7],
            ["School Supplies", 8],
          ],
        },
      ],
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        className: `!rounded-md overflow-hidden my-2 w-full md:w-1/3 ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default ProductSale;
