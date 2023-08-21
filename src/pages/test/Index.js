import React from "react";
import { useState, useEffect } from "react";

const Index = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className=" bg-light" style={{ height: "100vh", width: "100vw" }}>
        <div className="container">
          <input
            type="text"
            className="form-control"
            placeholder={"Hey"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div id="display">{input}</div>
        </div>
      </div>
    </>
  );
};

export default Index;
