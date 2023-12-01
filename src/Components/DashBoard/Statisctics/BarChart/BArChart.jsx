import React from "react";
import { Chart } from "react-google-charts";

const BArChart = () => {


 const data = [
  ["Publisher", "2022 Publishes", "2023 Publishes"],
  ["BBC, CNN", 700000, 40000],
  ["BBC, NDTV", 70000,400000],
  ["Aljajira, CNN", 2695000, 2896000],
  ["CNN, BBC", 2099000, 1953000],
  ["BBC, NDTV", 1526000, 1517000],
];

const options = {
  title: "Publishes Article Amount",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Article",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};
    return (
        <div>
           <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />  
        </div>
    );
};

export default BArChart;