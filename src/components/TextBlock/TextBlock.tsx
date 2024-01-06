import { TextBlockProps } from "../../types.tsx";
import styles from "./text.module.css";

const TextBlockComponent = (data: TextBlockProps) => {
  const textBlockData = {
    id: data.id,
    type: data.type,
    data: data.value,
  };

  const styleProps = {
    width: `${data.width}px`,
    height: `${data.height}px`,
    fontSize: `${data.fontSize}px`,
    fontFamily: `${data.fontFamily}`,
    color: `${data.color}`,
    fontWeight: data.bold ? "900" : "300",
    top: `${data.y}px`,
    left: `${data.x}px`,
  };

  return (
    <div style={styleProps} className={styles.text}>{textBlockData.data}</div>
  );
};

export default TextBlockComponent;