import { useEffect } from "react";

export const useOnBodyClick = (
  ref?: HTMLElement,
  handler?: () => void
): void => {
  const handleBodyClick = (event: MouseEvent) => {
    if (ref?.contains(event.target as Node)) {
      event.stopPropagation();
      return;
    }
    handler?.();
  };

  const handleOnEsc = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      handler?.();
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleBodyClick);
    document.body.addEventListener("keydown", handleOnEsc);
    return () => {
      document.body.removeEventListener("mousedown", handleBodyClick, false);
      document.body.removeEventListener("keydown", handleOnEsc, false);
    };
  }, [ref, handler]);
};
