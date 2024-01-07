import { RefObject, useCallback, useRef } from "react";

type DndItemInfo = {
  elementRef: RefObject<HTMLDivElement>;
  controlRef: RefObject<HTMLDivElement>;
};

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop: (event: MouseEvent) => void;
}) => void;

const useDnD = () => {
  const registerDndItem = useCallback((dndItemInfo: DndItemInfo) => {
    const item = {
      ...dndItemInfo,
      startY: 0,
      startX: 0,
    };

    const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
      item.startY = item.elementRef.current!.getBoundingClientRect().top;
      item.startX = item.elementRef.current!.getBoundingClientRect().left;

      const onMouseUp = (event: MouseEvent) => {
        onDrop(event);

        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    return {
      onDragStart,
    };
  }, []);

  return {
    registerDndItem,
  };
};
export { useDnD };