import React from "react";
import { Chart } from "react-google-charts";

const BArChart = () => {


 const data = [
  ["Publisher", "2022 Publishes", "2023 Publishes"],
  ["BBC, CNN", 7, 4],
  ["BBC, NDTV", 7,4],
  ["AlJajira, CNN", 5, 4],
  ["CNN, BBC", 4, 7],
  ["BBC, NDTV", 7,4],
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