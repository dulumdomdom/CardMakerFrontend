import { CanvasProps } from "../../types.tsx";
import styles from "../DownloadButton/DownloadButton.module.css";

const DownloadButton = (data: CanvasProps) => {
  const createFile = () => {
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    }); 
    return file; 
  };

  const file = createFile();

  const downloadFile = () => {
    const url = URL.createObjectURL(file); 
    const link = document.createElement("a"); 
    link.href = url; 
    link.download = "file.json"; 
    link.click(); 
  };

  return (
    <button onClick={downloadFile}>
      <img src="../../src/img/download.png" className={styles.toolsImg} />
    </button>
  );
};

export default DownloadButton;