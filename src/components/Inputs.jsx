import React from "react";
import "../styles/inputs.css";

const Inputs = ({ setDateStart, setDateEnd, setId, setIsSend }) => {
  return (
    <>
      <section className="inputContainer">
        <div className="inputGroup">
          <label>Id de la empresa</label>
          <input
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className="inputGroupRow">
          <div className="inputGroup">
            <label>Fecha inicio</label>
            <input
              type="date"
              onChange={(e) => {
                setDateStart(e.target.value);
              }}
            />
          </div>
          <div className="inputGroup">
            <label>Fecha final</label>
            <input
              type="date"
              onChange={(e) => {
                setDateEnd(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="inputGroup">
          <button
            onClick={() => {
              setIsSend(true);
            }}
            className="buttonInput"
          >
            Enviar
          </button>
        </div>
      </section>
    </>
  );
};

export default Inputs;
