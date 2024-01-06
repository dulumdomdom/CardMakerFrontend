import { CanvasProps } from "../../types.tsx";
import styles from "./Canvas.module.css";
import TextComponent from "../TextBlock/TextBlock.tsx";
import CircleComponent from "../GraphicObject/Circle/Circle.tsx";
import RectangleComponent from "../GraphicObject/Rectangle/Rectangle.tsx";
import ImageComponent from "../GraphicObject/ImageBlock/ImageBlock.tsx";
import FilterComponent from "../Filter/Filter.tsx";

type Props = {
  props: CanvasProps;
};

const CanvasComponent = (data: Props) => {
  const { props } = data;
  const styleProps = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.y}%`,
    left: `${props.x}%`,
  };

  return <div className={styles.canvas} style={styleProps}>
      {props.elements.map((el) => {
        if (el.type === 'filter') {
          return <FilterComponent {...el}/>
        }
        if (el.type === 'text') {
          return <TextComponent {...el}/>
        }
        if (el.type === 'circle') {
          return <CircleComponent {...el}/>
        }
        if (el.type === 'rectangle') {
          return <RectangleComponent {...el}/>
        }
        if (el.type === 'image') {
          return <ImageComponent {...el}/>
        }
      })}
  </div>;
};

export default CanvasComponent;