import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./types";

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalNode = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (portalNode) {
      document.body.appendChild(portalNode);
      return () => {
        document.body.removeChild(portalNode);
      };
    }
  }, [portalNode]);

  return portalNode ? createPortal(children, portalNode) : null;
};

export default Portal;
