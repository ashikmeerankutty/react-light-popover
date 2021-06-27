import { useState } from 'react';
import { Popover } from '../lib';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Popover show={show} content={<div>Hello</div>}>
        <button type="button" onClick={() => setShow(!show)}>
          Show popover
        </button>
      </Popover>
    </div>
  );
}
