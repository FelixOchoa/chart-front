import React, { useEffect, useState } from "react";
import { dataChart } from "../utils/data";
import { obtenerConteoPorPregunta } from "../utils/utils";
import BarChart from "./BarChart";
import "../styles/charts.css";
import moment from "moment/moment";
import "moment/locale/es";

const Charts = ({ dateStart, dateEnd, id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = obtenerConteoPorPregunta(dataChart);
    setData(data);
  }, []);

  return (
    <>
      <section>
        {dateStart && dateEnd && id && (
          <div className="chartContainer">
            <span>
              Intervalo: del {moment(dateStart).format("ll")} a{" "}
              {moment(dateEnd).format("ll")}
            </span>
            {data.map((item, index) => {
              return (
                <>
                  <div className="chartsStyle" key={index}>
                    <h2>{item[0]?.pregunta}</h2>
                    <BarChart data={item} />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Charts;
