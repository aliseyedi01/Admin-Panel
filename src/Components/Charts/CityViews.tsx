// react
import React, { useEffect, useState } from "react";
// highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import mapModule from "highcharts/modules/map";
mapModule(Highcharts);
// types
import { useAppSelector } from "@/interface/utils";

// static data from views of iran's city
let mapDataIran = [
  ["ir-5428", 10],
  ["ir-hg", 11],
  ["ir-bs", 12],
  ["ir-kb", 13],
  ["ir-fa", 14],
  ["ir-es", 15],
  ["ir-sm", 16],
  ["ir-go", 17],
  ["ir-mn", 18],
  ["ir-th", 19],
  ["ir-mk", 20],
  ["ir-ya", 21],
  ["ir-cm", 22],
  ["ir-kz", 23],
  ["ir-lo", 24],
  ["ir-il", 25],
  ["ir-ar", 26],
  ["ir-qm", 27],
  ["ir-hd", 28],
  ["ir-za", 29],
  ["ir-qz", 30],
  ["ir-wa", 31],
  ["ir-ea", 32],
  ["ir-bk", 33],
  ["ir-gi", 34],
  ["ir-kd", 35],
  ["ir-kj", 36],
  ["ir-kv", 37],
  ["ir-ks", 38],
  ["ir-sb", 39],
  ["ir-ke", 40],
  ["ir-al", 41],
];

const CityViews: React.FC = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode.isDarkModeEnabled);
  const [dataMap, setDataMap] = useState(null);

  const topology = async () => {
    try {
      const data = await fetch("https://code.highcharts.com/mapdata/countries/ir/ir-all.topo.json");
      const jsonData = await data.json();
      // console.log("data", jsonData);
      setDataMap(jsonData);
      return jsonData;
    } catch (error) {
      console.error("Error fetching topology:", error);
      setDataMap(null);
    }
  };

  useEffect(() => {
    topology();
  }, []);

  const options = {
    chart: {
      type: "map",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "City Views",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, "#EFEFFF"],
        [0.67, "#4444FF"],
        [1, "#000022"],
      ],
    },
    series: [
      {
        mapData: dataMap,
        data: mapDataIran,
        borderColor: "#FFF",
        name: "Iran",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
      },
    ],
  };

  if (!dataMap) {
    return <div>Loading...</div>;
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType="mapChart"
      containerProps={{
        className: `rounded-md my-2 overflow-hidden inline-block w-full md:w-1/3 ${
          isDarkModeEnabled ? "highcharts-dark" : "highcharts-light"
        }`,
      }}
    />
  );
};

export default CityViews;
