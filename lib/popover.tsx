import React, { cloneElement, useRef, useState } from "react";

import { usePopover } from "./hook";
import Portal from "./portal";
import { PopoverProps } from "./types";

export const Popover: React.FC<PopoverProps> = ({
  show,
  content,
  children,
  positions = ["bottom"],
  align,
}) => {
  const targetRef = useRef<HTMLElement>();
  const [contentRef, setContentRef] = useState<HTMLElement>();

  const { styles } = usePopover(
    targetRef.current,
    contentRef,
    positions,
    align
  );

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
