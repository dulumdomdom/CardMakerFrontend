import "./App.module.css";
import Canvas from ".././components/Canvas/Canvas";
import doc from "../data";

function App() {
  return (
    <div>
      <Canvas props={doc.canvas} />
    </div>
  );
}

export default App;