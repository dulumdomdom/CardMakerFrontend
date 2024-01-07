import { RefObject, useState } from "react";

import { CircleProps } from "../../../types";
import SelectionArea from "../../SelectionArea/SelectionArea";
import style from "./circle.module.css";

const Circle = (props: CircleProps) => {
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

  return <div className={style.circle} style={styleProps}></div>;
};

export default Circle;