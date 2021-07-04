import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PopoverAlign, PopoverPosition } from "./types";
import { getPopoverRect, isStylesEqual } from "./utils";

type PopoverState = {
  position: string;
  top: string | number;
  left: string | number;
};

export const usePopover = (
  target: HTMLElement | undefined,
  content: HTMLElement | undefined,
  positions: PopoverPosition[],
  align: PopoverAlign,
  offset?: number
): { styles: PopoverState } => {
  const prevStyles = useRef({
    left: 0,
    top: 0,
  });
  const [styles, setStyles] = useState<PopoverState>({
    position: "fixed",
    left: 0,
    top: 0,
  });

  const [positionIndex, setPositionIndex] = useState(0);

  useLayoutEffect(() => {
    let shouldUpdatePopover = true;
    const updatePosition = () => {
      if (content && target) {
        const { rect: updatedStyles, violatesBoundary } = getPopoverRect(
          target,
          content,
          positions[positionIndex],
          align,
          offset
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
