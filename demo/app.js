import { useState } from 'react';
import { Popover } from '../lib';

export default function App() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState('bottom');
  const [align, setAlign] = useState();

  return (
    <div className="App">
      <div
        style={{
          width: '100%',
          height: '200px',
          overflow: 'scroll',
        }}
      >
        <div
          style={{
            display: 'grid',
            height: '300px',
            width: '100%',
            placeItems: 'center',
          }}
        >
          <Popover
            show={show}
            position={position}
            align={align}
            content={<div>Hello</div>}
          >
            <div>
              <button type="button" onClick={() => setShow(!show)}>
                Show popover
              </button>
            </div>
          </Popover>
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button type="button" onClick={() => setPosition('top')}>
          Top
        </button>
        <button type="button" onClick={() => setPosition('left')}>
          Left
        </button>
        <button type="button" onClick={() => setPosition('bottom')}>
          Bottom
        </button>
        <button type="button" onClick={() => setPosition('right')}>
          Right
        </button>
        <button type="button" onClick={() => setAlign('start')}>
          Start
        </button>
        <button type="button" onClick={() => setAlign('end')}>
          End
        </button>
        <button type="button" onClick={() => setAlign()}>
          Center
        </button>
      </div>
    </div>
  );
}
