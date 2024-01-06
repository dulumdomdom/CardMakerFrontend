import { CanvasProps } from "../../types.tsx";
import { Dispatch, SetStateAction } from "react";
import { ChangeEvent } from "react";
import styles from "../UploadButton/UploadButton.module.css";

type Props = {
  setPage: Dispatch<SetStateAction<CanvasProps>>;
};

const UploadData = (props: Props) => {
  const { setPage } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file: File;
    if (event.target.files) {
      file = event.target.files[0];
      reader.readAsText(event.target.files[0]);
    }

    reader.onloadend = function () {
      try {
        if (typeof reader.result !== "string")
          throw Error("invalid file type: " + typeof reader.result);
        if (file.type !== "application/json")
          throw Error("invalid file: " + file.type);
        const dataParsing = JSON.parse(reader.result);
        setPage(() => {
          return {
            id: dataParsing.id,
            width: dataParsing.width,
            height: dataParsing.height,
            y: dataParsing.y,
            x: dataParsing.x,
            elements: [...dataParsing.elements],
          };
        });
      } catch (error) {
        alert(error);
      }
    };
  };

  return (
    <>
    <label htmlFor="uploadInput"> <img src="../../src/img/upload.png" className={styles.toolsImg} /></label>
      <input
        className={styles.uploadData}
        id="uploadInput"
        accept=".json"
        onChange={onChange}
        type="file"
        placeholder="Загрузить"
    />
    </>
  );
};

export default UploadData;