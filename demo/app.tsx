import React, { useState } from "react";
import { Popover, PopoverAlign, PopoverPosition } from "../lib";
import "./styles.css";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<PopoverPosition>("bottom");
  const [align, setAlign] = useState<PopoverAlign>("center");

  return (
    <div className="app">
      <div className="heading">React Light Popover</div>
      <div className="popover__wrapper">
        <Popover
          show={show}
          positions={[position, "bottom"]}
          align={align}
          offset={10}
          content={<div className="content__styles">Hello</div>}
          onClose={() => setShow(false)}
        >
          <button type="button" onClick={() => setShow(!show)}>
            Show popover
          </button>
        </Popover>
      </div>
      <div className="data__button">
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
