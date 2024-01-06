import { ImageBlock } from "../../../types.tsx";
import styles from "./image.module.css";

const ImageComponent = (data: ImageBlock) => {
  const styleProps = {
    width: `${data.width}px`,
    height: `${data.height}px`,
    top: `${data.y}px`,
    left: `${data.x}px`,
    background: `url(${data.url}) center center/cover no-repeat`,
  };

  return (
    <div style={styleProps} className={styles.image}></div>
  );
};
export default ImageComponent;