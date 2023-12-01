import React from "react";
import { Chart } from "react-google-charts";

const LineChart = () => {


 const data = [
  ["Element", "Density", { role: "style" }],
  ["BBC", 7, "#b87333"], // RGB value
  ["NDTV", 4, "silver"], // English color name
  ["CNN", 4, "gold"],
  ["AlJajira", 5, "color: #e5e4e2"], // CSS-style declaration
];
    return (
        <div>
             <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  
        </div>
    );
};

export default LineChart;