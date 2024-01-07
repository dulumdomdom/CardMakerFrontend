import { RefObject, useCallback, useRef } from "react";

type ControlResizeRefs = {
  leftControl: RefObject<HTMLDivElement>;
  rightControl: RefObject<HTMLDivElement>;
  topControl: RefObject<HTMLDivElement>;
  bottomControl: RefObject<HTMLDivElement>;
  topLeftControl: RefObject<HTMLDivElement>;
  topRightControl: RefObject<HTMLDivElement>;
  bottomLeftControl: RefObject<HTMLDivElement>;
  bottomRightControl: RefObject<HTMLDivElement>;
};

type ResizeItemInfo = {
  elementRef: RefObject<HTMLDivElement>;
  controlRef: ControlResizeRefs;
};

type OnResizeStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop: (event: MouseEvent) => void;
}) => void;

const useResize = () => {
  const registerResizeItem = useCallback((resizeItemInfo: ResizeItemInfo) => {
    const item = {
      ...resizeItemInfo,
      startY: 0,
      startX: 0,
    };

    const onResizeStart: OnResizeStartFn = ({ onDrag, onDrop }) => {
      const onMouseUp = (event: MouseEvent) => {
        onDrop(event);

        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    return {
      onResizeStart,
    };
  }, []);

  return {
    registerResizeItem,
  };
};
export { useResize, ControlResizeRefs };