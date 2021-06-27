import { cloneElement, useRef, useState } from 'react';
import { usePopover } from './hook';
import Portal from './portal';

export const Popover = ({
  show,
  content,
  children,
  position = 'bottom',
  align,
}) => {
  const targetRef = useRef();
  const [contentRef, setContentRef] = useState(null);

  const { styles } = usePopover(targetRef.current, contentRef, position, align);

  const renderTarget = () =>
    cloneElement(children, {
      ref: targetRef,
    });

  const renderChild = () => {
    if (!show) {
      return null;
    }
    return (
      <Portal>
        {cloneElement(content, {
          ref: (ref) => setContentRef(ref),
          style: { ...styles },
        })}
      </Portal>
    );
  };

  return (
    <>
      {renderTarget()}
      {renderChild()}
    </>
  );
};

export default Popover;
