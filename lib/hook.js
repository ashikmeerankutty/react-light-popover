import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getPopoverRect, isStylesEqual } from './utils';

export const usePopover = (target, content, positions, align) => {
  const prevStyles = useRef({
    left: 0,
    top: 0,
  });
  const [styles, setStyles] = useState({
    position: 'fixed',
    left: 0,
    top: 0,
  });

  const [positionIndex, setPositionIndex] = useState(0);

  useLayoutEffect(() => {
    let shouldUpdatePopover = true;
    const updatePosition = () => {
      if (content) {
        const { rect: updatedStyles, violatesBoundary } = getPopoverRect(
          target,
          content,
          positions[positionIndex],
          align,
          setPositionIndex
        );
        if (!isStylesEqual(updatedStyles, prevStyles.current)) {
          prevStyles.current = updatedStyles;
          setStyles({
            ...styles,
            top: `${updatedStyles.top}px`,
            left: `${updatedStyles.left}px`,
          });
        }
        if (violatesBoundary && positions[positionIndex + 1]) {
          setPositionIndex(positionIndex + 1);
        }
        if (shouldUpdatePopover) {
          window.requestAnimationFrame(updatePosition);
        }
      }
    };
    window.requestAnimationFrame(updatePosition);
    return () => {
      shouldUpdatePopover = false;
    };
  }, [content, JSON.stringify(positions), align, target, positionIndex]);

  useEffect(() => {
    setPositionIndex(0);
  }, [JSON.stringify(positions)]);

  return { styles };
};

export default usePopover;
