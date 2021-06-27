import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, onReady }) => {
  const portalNode = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (portalNode) {
      document.body.appendChild(portalNode);
      if (typeof onReady === 'function') {
        onReady(portalNode);
      }
      return () => {
        document.body.removeChild(portalNode);
      };
    }
    return null;
  }, [portalNode]);

  return portalNode ? createPortal(children, portalNode) : null;
};

export default Portal;
