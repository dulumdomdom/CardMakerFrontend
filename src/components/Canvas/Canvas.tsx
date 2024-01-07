import { useState, useRef, useEffect } from "react";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../../types";

import style from "./canvas.module.css";

const Canvas = (props: PageProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    canvas.width = props.width;
    canvas.height = props.height;
    canvas.style.top = `${props.y}%`;
    canvas.style.left = `${props.x}%`;
    context!.clearRect(0, 0, canvas.width, canvas.height);

    Promise.all(
      props.elements.map(
        (
          element:
            | TextBlockProps
            | ImageBlockProps
            | CircleProps
            | RectangleProps
            | FilterProps
        ) => {
          if (element.type === "image") {
            return new Promise<
              | TextBlockProps
              | ImageBlockProps
              | CircleProps
              | RectangleProps
              | FilterProps
            >((res) => {
              const pic = new Image();
              pic.src = element.url;
              pic.onload = () => res({ ...element, pic: pic });
            });
          } else {
            return new Promise<
              | TextBlockProps
              | ImageBlockProps
              | CircleProps
              | RectangleProps
              | FilterProps
            >((res) => {
              res(element);
            });
          }
        }
      )
    ).then((elements) => {
      elements.forEach(
        (
          element:
            | TextBlockProps
            | ImageBlockProps
            | CircleProps
            | RectangleProps
            | FilterProps
        ) => {
          const ctx = canvas.getContext("2d")!;
          ctx.globalAlpha = 1;
          switch (element.type) {
            case "text":
              ctx.font = ` ${element.fontSize}px ${element.fontFamily}`;
              ctx!.fillStyle = element.color;
              ctx!.fillText(element.value, element.x + 3, element.y + 22);
              break;
            case "circle":
              ctx!.beginPath();
              ctx.ellipse(
                element.x + element.width / 2 + 4,
                element.y + element.height / 2 + 4,
                element.width / 2,
                element.height / 2,
                0,
                0,
                2 * Math.PI
              );
              ctx.stroke();
              ctx!.fillStyle = element.backgroundColor;
              ctx!.fill();
              break;
            case "rectangle":
              ctx!.fillStyle = element.backgroundColor;
              ctx!.fillRect(
                element.x,
                element.y,
                element.width,
                element.height
              );
              console.log(element.backgroundColor);
              break;
            case "image":
              ctx!.drawImage(
                element.pic as HTMLImageElement,
                element.x,
                element.y,
                element.width,
                element.height
              );
              break;
            case "filter":
              ctx!.fillStyle = element.colorOfFilter;
              ctx.globalAlpha = element.opacity;
              ctx!.fillRect(
                element.x,
                element.y,
                element.width,
                element.height
              );
              ctx.globalAlpha = 1;
              break;
            default:
              return null;
          }
        }
      );
    });
  }, [props.elements]);

  return <canvas className={style.page} ref={ref}></canvas>;
};

export default Canvas;