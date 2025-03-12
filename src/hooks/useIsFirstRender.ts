import { useEffect, useRef } from "react";

export const useIsFirstRender = (): boolean => {
  const renderRef = useRef(0);

  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  }, []);

  return renderRef.current === 0;
};

export default useIsFirstRender;
