import React, { useState } from "react";
import "./App.css";

function Component() {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(0);

  function Click() {
    let newCount = count + 1;
    setCount(newCount);
    if (newCount == 1) {
      setColor("red");
    } else if (newCount == 2) {
      setColor("blue");
    } else if (newCount == 3) {
      setColor("green");
    } else {
      setColor("white");
      setCount(0);
    }
  }



  return (
    <>
      <div
        className="component-2"
        onClick={Click}
        style={{ backgroundColor: color }}
      >
        <p>Component 2</p>
      </div>
    </>
  );
}

export default Component;
