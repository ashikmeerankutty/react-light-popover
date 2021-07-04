import React, { useState } from "react";
import { Popover, PopoverAlign, PopoverPosition } from "../dist/esm";
import "./styles.css";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<PopoverPosition>("bottom");
  const [align, setAlign] = useState<PopoverAlign>("center");
  const [onBodyClosable, setOnBodyClosable] = useState<boolean>(false);

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
          onClose={() => onBodyClosable && setShow(false)}
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
      <div
        onClick={() => setOnBodyClosable(!onBodyClosable)}
        className="data__checkbox"
      >
        <input
          checked={onBodyClosable}
          onChange={() => setOnBodyClosable(!onBodyClosable)}
          type="checkbox"
        ></input>
        <p>Close on body click</p>
      </div>
    </div>
  );
};

export default App;
