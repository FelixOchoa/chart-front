import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChartRender = ({ data }) => {
  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="opcionRespuesta" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="conteo" fill="#60a5fa" />
      </BarChart>
    </>
  );
};

export default BarChartRender;
