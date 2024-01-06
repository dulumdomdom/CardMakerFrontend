import styles from "./menu.module.css";
import DownloadButton from "../DownloadButton/DownloadButton";
import UploadButton from "../UploadButton/UploadButton";
import { CanvasProps } from "../../types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setCanvas: Dispatch<SetStateAction<CanvasProps>>;
  canvas: CanvasProps;
};

const Menu = (data: Props) => {
  const { canvas, setCanvas } = data;
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <button>
            <img src="../../src/img/addimage.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="../../src/img/addtext.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="../../src/img/circle.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="../../src/img/rectangle.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
          <button>
            <img src="../../src/img/filter.png" className={styles.toolsImg} />
          </button>
        </li>
        <li>
            <DownloadButton {...canvas} />
        </li>
        <li>
          <button>
            <UploadButton setPage={setCanvas} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;