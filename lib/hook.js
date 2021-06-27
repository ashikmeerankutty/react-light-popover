import { useLayoutEffect, useRef, useState } from 'react';
import { getPopoverRect, isStylesEqual } from './utils';

export const usePopover = (target, content, position, align) => {
  const prevStyles = useRef({
    left: 0,
    top: 0,
  });
  const [styles, setStyles] = useState({
    position: 'fixed',
    left: 0,
    top: 0,
  });

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (content) {
        const updatedStyles = getPopoverRect(target, content, position, align);
        if (!isStylesEqual(updatedStyles, prevStyles.current)) {
          prevStyles.current = updatedStyles;
          setStyles({
            ...styles,
            top: `${updatedStyles.top}px`,
            left: `${updatedStyles.left}px`,
          });
          window.requestAnimationFrame(updatePosition);
        }
      }
    };
    window.requestAnimationFrame(updatePosition);
  }, [content, position, align, target]);

  return { styles };
};

export default usePopover;
