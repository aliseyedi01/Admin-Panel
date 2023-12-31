// React
import { useEffect, useState, useMemo } from "react";
// highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HCExporting from "highcharts/modules/exporting";
HCExporting(Highcharts);
// redux
import { useAppSelector } from "@/interface/utils";

const SaleQuantity: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);

  const fetchData = async () => {
    try {
      const response = await fetch("https://demo-live-data.highcharts.com/aapl-c.json");
      const data = await response.json();
      setChartData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const memoizedChartData = useMemo(() => chartData, [chartData]);

  const options = {
    chart: {
      styledMode: true,
      zoomType: "x",
      panning: true,
      zooming: {
        mouseWheel: {
          enabled: false,
        },
      },
    },
    scrollbar: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Sale Quantity",
    },
    xAxis: {
      panning: false,
    },
    yAxis: {
      title: {
        text: "Quantity",
      },
    },
    series: [
      {
        name: "Sale",
        data: memoizedChartData,
      },
    ],
    exporting: {
      enabled: true,
    },
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"stockChart"}
      containerProps={{
        className: `rounded-md my-2  fill-transparent overflow-hidden ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default SaleQuantity;
