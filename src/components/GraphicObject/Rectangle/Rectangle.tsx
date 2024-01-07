import { useState } from "react";
import SelectionArea from "../../SelectionArea/SelectionArea";

import { RectangleProps } from "../../../types";
import style from "./rectangle.module.css";

const Rectangle = (props: RectangleProps) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    backgroundImage: `${state.backgroundImage}`,
    backgroundColor: `${state.backgroundColor}`,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  return <div className={style.rectangle} style={styleProps}></div>;
};

export default Rectangle;