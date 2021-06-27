import { PopoverAlign, PopoverPosition, Rect } from "./types";

const boundaryInset = 10;

const exceedsBoundary = (
  parent: HTMLElement,
  currentRect: Rect,
  position: PopoverPosition
) => {
  const {
    top: parentTop,
    left: parentLeft,
    right: parentRight,
    bottom: parentBottom,
  } = parent.getBoundingClientRect();
  return (
    (position === "top" && currentRect.top < parentTop + boundaryInset) ||
    (position === "left" && currentRect.left < parentLeft + boundaryInset) ||
    (position === "right" && currentRect.right > parentRight - boundaryInset) ||
    (position === "bottom" && currentRect.bottom > parentBottom - boundaryInset)
  );
};

const getPopoverRectForPosition = (
  target: HTMLElement,
  content: HTMLElement,
  position: string,
  align: string
): Rect => {
  const {
    left: targetLeft,
    right: targetRight,
    bottom: targetBottom,
    width: targetWidth,
    top: targetTop,
    height: targetHeight,
  } = target?.getBoundingClientRect() || {};

  const targetMidX = targetLeft + targetWidth / 2;
  const targetMidY = targetTop + targetHeight / 2;

  const { width, height } = content.getBoundingClientRect();

  let top = 0;
  let left = 0;

  switch (position) {
    case "top":
      top = targetTop - height;
      left = targetMidX - width / 2;
      if (align === "start") {
        left = targetLeft;
      }
      if (align === "end") {
        left = targetRight - width;
      }
      break;
    case "left":
      top = targetMidY - height / 2;
      left = targetLeft - width;
      if (align === "start") {
        top = targetTop;
      }
      if (align === "end") {
        top = targetBottom - height;
      }
      break;
    case "bottom":
      top = targetBottom;
      left = targetMidX - width / 2;
      if (align === "start") {
        left = targetLeft;
      }
      if (align === "end") {
        left = targetRight - width;
      }
      break;
    case "right":
      top = targetMidY - height / 2;
      left = targetRight;
      if (align === "start") {
        top = targetTop;
      }
      if (align === "end") {
        top = targetBottom - height;
      }
      break;
    default:
      break;
  }

  return {
    top,
    left,
    width,
    height,
    right: left + width,
    bottom: top + height,
  };
};

export const getPopoverRect = (
  targetElement: HTMLElement,
  contentElement: HTMLElement,
  position: PopoverPosition,
  align: PopoverAlign
): {
  violatesBoundary: boolean;
  rect: Rect;
} => {
  const rect = getPopoverRectForPosition(
    targetElement,
    contentElement,
    position,
    align
  );

  const violatesBoundary = exceedsBoundary(document.body, rect, position);

  return {
    violatesBoundary,
    rect,
  };
};

export const isStylesEqual = (updated: Rect, current: Partial<Rect>): boolean =>
  !Object.keys(updated).some((key) => updated[key] !== current[key]);
