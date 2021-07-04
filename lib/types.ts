import { ReactElement } from "react";

export type PopoverPosition = "left" | "right" | "top" | "bottom";
export type PopoverAlign = "start" | "center" | "end";
export type Rect = {
  [key: string]: string | number;
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};

export interface PopoverProps {
  show: boolean;
  content: ReactElement;
  children: ReactElement;
  positions: PopoverPosition[];
  align: PopoverAlign;
  offset?: number;
  onClose?: () => void;
}

export interface PortalProps {
  children: ReactElement;
}
