import { Circle } from "../../../types.tsx";
import styles from "./circle.module.css";

const CircleComponent = (data: Circle) => {
  const styleProps = {
    width: `${data.width}px`,
    height: `${data.height}px`,
    top: `${data.y}px`,
    left: `${data.x}px`,
    backgroundColor: data.backgroundColor,
  };

  return (
    <div style={styleProps} className={styles.circle}></div>
  );
}

export default CircleComponent;