import { useEffect, useState } from "react";
import { Data } from "./chartData";

function Chart(){
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://55d68259.eu-gb.apigw.appdomain.cloud/api/entries");
      const data = await res.json();
      setChartData({
        labels: data.entries.map((ele) => ele.Date),
        datasets: [
          {
            label: "Humidity",
            data: data.entries.map((crypto) => crypto.humidity),
            backgroundColor: [
              "#ffbb11"
            ]
          },
          {
            label: "Temperature",
            data: data.entries.map((crypto) => crypto.temperature),
            backgroundColor: [
              "#407294"
            ]
          }
        ]
      });
    };
    fetchPrices();
  }, []);

  const [chartData, setChartData] = useState({});

  return (
    <div className="App">
      <Data chartData={chartData}/>
    </div>
  );
}

export default Chart;
