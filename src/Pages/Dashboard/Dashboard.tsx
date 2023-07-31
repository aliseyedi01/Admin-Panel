import { PageLayout } from "@/Components";
import Stats from "./Stats";

// import Highcharts from "highcharts";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState, useMemo } from "react";

import HCExporting from "highcharts/modules/exporting";

// Initialize the exporting module
HCExporting(Highcharts);

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://demo-live-data.highcharts.com/aapl-c.json");
      const data = await response.json();
      setChartData(data);
      // console.log(data);
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
    },
    title: {
      text: "Sale Quantity",
    },
    xAxis: {},
    yAxis: {
      title: {
        text: "Quantity",
      },
      opposite: false,
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
    <PageLayout>
      <Stats />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
        containerProps={{
          className: "rounded-md overflow-hidden my-2  highcharts-dark",
        }}
      />
    </PageLayout>
  );
};

export default Dashboard;
