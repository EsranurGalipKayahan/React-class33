import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../utilsFunc";

export const Forecast = () => {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [graphData, setGraphData] = useState([]);

  const prepareGraphData = (data) => {
    let tempData = [];

    tempData = data.list.map((weatherInfo) => {
      return {
        date: dateFormatter(weatherInfo.dt_txt),
        temp: parseFloat(weatherInfo.main.temp),
      };
    });

    setGraphData(tempData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        const data = await response.json();
        setData(data);
        prepareGraphData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cityId]);
  return (
    <div className="graph">
      {graphData.length !== 0 && (
        <>
          <h1>5 days Forecast</h1>
          <h3>
            {data.city.name}, {data.city.country}
          </h3>
          <ResponsiveContainer width={750} height={300}>
            <AreaChart data={graphData}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3431A7" stopOpacity={0.4} />
                  <stop offset="0%" stopColor="#3431A7" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <Area dataKey="temp" stroke="#3431A7" fill="url(#color)" />
              <XAxis dataKey="date" tickCount={5} />
              <YAxis dataKey="temp" tickCount={4} />
              <Tooltip />
              <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
          <button className="round" onClick={() => navigate("/")}>
            &#8249;
          </button>
        </>
      )}
    </div>
  );
};
