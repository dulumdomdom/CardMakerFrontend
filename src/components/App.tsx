import styles from "./App.module.css";
import Canvas from ".././components/Canvas/Canvas";
import doc from "../data";
import Menu from ".././components/Menu/Menu.tsx";
import { useState } from "react";
import { CanvasProps } from "../types.tsx";

function App() {
  const [canvas, setCanvas] = useState<CanvasProps>({
    id: doc.canvas.id,
    width: doc.canvas.width,
    height: doc.canvas.height,
    y: doc.canvas.y,
    x: doc.canvas.x,
    elements: [...doc.canvas.elements],
  });

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <img src="../../src/img/logo.png" className={styles.logoImg} />
        </div>
        <nav className={styles.topMenu}></nav>
      </header>

      <div className={styles.leftMenu}>
        <Menu canvas={canvas} setCanvas={setCanvas} />
      </div>

      <div className={styles.canvas}>
        <Canvas props={canvas} />
      </div>
    </div>
  );
}

export default App;