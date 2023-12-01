import React from "react";
import { Chart } from "react-google-charts";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Statistics = () => {

    const axiosSecure = UseAxiosSecure();
    const {refetch, data: article = []} = useQuery({
        
        queryKey: ['article'],
        
        queryFn: async () => {
            const res = await axiosSecure.get('/article');
            console.log(res.data)
            return res.data;
            

        }
        

    });

    const BBC = article.filter(art=>art.publisher === "BBC");
    const NDTV = article.filter(art=>art.publisher === "NDTV");
    const CNN = article.filter(art=>art.publisher === "CNN");
    const AlJajira = article.filter(art=>art.publisher === "AlJajira");

 
 const data = [
  ["Task", "Hours per Day"],
  ["BBC", BBC.length],
  ["NDTV", NDTV.length],
  ["CNN", CNN.length],
  ["AlJajira", AlJajira.length],
  
];

 const options = {
  title: "Pic Chart",
};
    return (
        <div>
        
          <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    /> 
        </div>
    );
};

export default Statistics;