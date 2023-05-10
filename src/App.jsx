import React, { useState } from "react";
import Inputs from "./components/Inputs";
import Charts from "./components/Charts";

const App = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [id, setId] = useState("");
  const [isSend, setIsSend] = useState(false);

  return (
    <>
      <main>
        <Inputs
          setDateStart={setDateStart}
          setDateEnd={setDateEnd}
          setId={setId}
          setIsSend={setIsSend}
        />
        <Charts
          dateStart={dateStart}
          dateEnd={dateEnd}
          id={id}
          isSend={isSend}
        />
      </main>
    </>
  );
};

export default App;
