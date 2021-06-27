import React, { useState } from "react";
import { Popover, PopoverAlign, PopoverPosition } from "../lib";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<PopoverPosition>("bottom");
  const [align, setAlign] = useState<PopoverAlign>("center");

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Popover
            show={show}
            positions={[position, "bottom"]}
            align={align}
            content={<div>Hello</div>}
          >
            <button type="button" onClick={() => setShow(!show)}>
              Show popover
            </button>
          </Popover>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button type="button" onClick={() => setPosition("top")}>
          Top
        </button>
        <button type="button" onClick={() => setPosition("left")}>
          Left
        </button>
        <button type="button" onClick={() => setPosition("bottom")}>
          Bottom
        </button>
        <button type="button" onClick={() => setPosition("right")}>
          Right
        </button>
        <button type="button" onClick={() => setAlign("start")}>
          Start
        </button>
        <button type="button" onClick={() => setAlign("end")}>
          End
        </button>
        <button type="button" onClick={() => setAlign("center")}>
          Center
        </button>
      </div>
    </div>
  );
};

export default App;