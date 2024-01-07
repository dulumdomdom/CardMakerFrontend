import { useState } from "react";

import { TextBlockProps } from "../../types";

import style from "./textBlock.module.css";

const TextBlock = (props: TextBlockProps) => {
  const styleProps = {
    fontSize: `${props.fontSize}px`,
    fontFamily: `${props.fontFamily}, sans-serif`,
    color: `${props.color}`,
    fontWeight: props.bold ? "700" : "400",
    fontStyle: props.italic ? "italic" : "normal",
    textDecoration: props.underline ? "underline" : "none",
  };

  return (
    <div
      onClick={(e: React.MouseEvent) => e.preventDefault()}
      className={style.textBlock}
      style={styleProps}
    >
      {props.value}
    </div>
  );
};

export default TextBlock;