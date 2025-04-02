import { useState } from "react";

const App = () => {
  let [date, getDate] = useState("TIME");

  function getTime() {
    setInterval(() => {
      const fullTime = new Date().toLocaleTimeString();
      getDate((date = fullTime));
    });
  }

  return (
    <div>
      <h1>{date}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
};

export default App;
