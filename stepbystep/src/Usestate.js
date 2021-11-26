import React, { useState } from "react";

const Usestate = () => {
  const [data, setdata] = useState("UseState");
  function apple() {
    return setdata("yeah this is useState");
  }
  return (
    <div style={{ background: "blue" }}>
      <h1>{data}</h1>
      <button onClick={apple}>updateme</button>
    </div>
  );
};

export default Usestate;
