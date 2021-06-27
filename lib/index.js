import { useRef, useState } from 'react';
import { usePopover } from './hook';
import Portal from './portal';

export const Popover = ({
  show,
  content,
  children,
  position = 'left',
  align = 'start',
}) => {
  const targetRef = useRef();
  const [contentRef, setContentRef] = useState(null);

  const { styles } = usePopover(targetRef.current, contentRef, position, align);

  return (
    <div>
      <div
        style={{
          display: 'inline-block',
        }}
        ref={targetRef}
        className="target"
      >
        {children}
      </div>
      {show && (
        <Portal>
          <div
            style={{ ...styles }}
            className="popover"
            ref={(ref) => setContentRef(ref)}
          >
            {content}
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Popover;
