import Canvas from "../Canvas/Canvas";
import { Dispatch, SetStateAction } from "react";
import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../../types";

import SelectionArea from "../SelectionArea/SelectionArea";

import style from "./page.module.css";

type Props = {
  page: PageProps;
  newElement:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps;
  setPage: Dispatch<SetStateAction<PageProps>>;
  setNewElement: Dispatch<
    SetStateAction<
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
    >
  >;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const Page = (props: Props) => {
  const { page, newElement, setPage, setNewElement, setShowMenuText } = props;

  const stylePage = {
    width: `${page.width}px`,
    height: `${page.height}px`,
    top: `${page.y}%`,
    left: `${page.x}%`,
  };

  return (
    <div className={style.page} style={stylePage}>
      <Canvas {...page} />
      {newElement != null ? (
        <SelectionArea
          newElement={newElement}
          setNewElement={setNewElement}
          setPage={setPage}
          pageX={page.x}
          pageY={page.y}
          setShowMenuText={setShowMenuText}
        />
      ) : null}
    </div>
  );
};

export default Page;