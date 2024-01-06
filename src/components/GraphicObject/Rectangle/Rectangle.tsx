import { Rectangle } from "../../../types.tsx";
import styles from "./rectangle.module.css";

const RectangleComponent = (data: Rectangle) => {
  const styleProps = {
    width: `${data.width}px`,
    height: `${data.height}px`,
    top: `${data.y}px`,
    left: `${data.x}px`,
    backgroundColor: data.backgroundColor,
  };

  return (
    <div style={styleProps} className={styles.rectangle}></div>
  );
};

export default RectangleComponent;