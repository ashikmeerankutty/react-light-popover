import React, { cloneElement, useRef, useState } from "react";

import { usePopover } from "./hook";
import Portal from "./portal";
import { PopoverProps } from "./types";
import { useOnBodyClick } from "./useOnBodyClick";

export const Popover: React.FC<PopoverProps> = ({
  show,
  content,
  children,
  positions = ["bottom"],
  align,
  offset,
  onClose,
}) => {
  const targetRef = useRef<HTMLElement>();
  const [contentRef, setContentRef] = useState<HTMLElement>();

  const { styles } = usePopover(
    targetRef.current,
    contentRef,
    positions,
    align,
    offset
  );

  const renderTarget = () =>
    cloneElement(children, {
      ref: targetRef,
    });

  useOnBodyClick(contentRef, onClose);

  const renderChild = () => {
    if (!show) {
      return null;
    }
    return (
      <Portal>
        {cloneElement(content, {
          ref: (ref: HTMLElement) => setContentRef(ref),
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
