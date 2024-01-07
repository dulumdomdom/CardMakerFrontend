import { useState } from "react";

import { FilterProps } from "../../types";
import style from "./filter.module.css";

const Filter = (props: FilterProps) => {
  const [state, setState] = useState(props);

  const styleProps = {
    opacity: state.opacity,
    backgroundColor: state.colorOfFilter,
  };

  return <div className={style.filter} style={styleProps}></div>;
};

export default Filter;