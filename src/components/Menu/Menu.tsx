import { Dispatch, SetStateAction } from "react";
import styles from "./Menu.module.css";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../../types";

type props = {
  addElement: (
    elemt:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => void;
  defaultMenuText: TextBlockProps;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const Menu = (props: props) => {
  const { addElement, defaultMenuText, setShowMenuText } = props;

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      type: "text",
      id: defaultMenuText.value,
      width: 200,
      height: 100,
      x: 400,
      y: 400,
      fontSize: defaultMenuText.fontSize,
      fontFamily: defaultMenuText.fontFamily,
      color: defaultMenuText.color,
      bold: defaultMenuText.bold,
      italic: defaultMenuText.italic,
      underline: defaultMenuText.underline,
      value: defaultMenuText.value,
    };
    setShowMenuText(() => true);
    addElement(elem);
  };

  const addImage = () => {
    const elem: ImageBlockProps = {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      x: 300,
      y: 300,
      url: "../../src/img/lego.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
      pic: null,
    };
    addElement(elem);
  };

  const addRectangle = () => {
    const elem: RectangleProps = {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#3B2CF4",
      backgroundImage: "",
      width: 200,
      height: 200,
      x: 600,
      y: 300,
    };
    addElement(elem);
  };

  const addCircle = () => {
    const elem: CircleProps = {
      id: "circle2",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 400,
      height: 400,
      x: 400,
      y: 400,
    };
    addElement(elem);
  };

  return (
    <div className="menu">
      <button className={styles.menuButton} onClick={addTextBlock}>
        <img src="../../src/img/addtext.png" className={styles.toolsImg} />
      </button>
      <button className={styles.menuButton} onClick={addCircle}>
        <img src="../../src/img/circle.png" className={styles.toolsImg} />
      </button>
      <button className={styles.menuButton}  onClick={addRectangle}>
        <img src="../../src/img/rectangle.png" className={styles.toolsImg} />
      </button>
      <button className={styles.menuButton} onClick={addImage}>
        <img src="../../src/img/addimage.png" className={styles.toolsImg} />
      </button>
    </div>
  );
};

export default Menu;