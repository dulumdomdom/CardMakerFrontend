import {
    Doc,
    TextBlockProps,
    Position,
    Size,
    Block,
    GraphicObject,
    ImageBlock,
    Circle,
    Rectangle,
    Filter,
    SelectionArea,
    Template,
    TemplatesCollection,
    CanvasProps,
    HistoryCommands,
    FilterCollection,
} from "./types.tsx";

const redFilter: Filter = {
    name: "redFilter",
    colorOfFilter: "#ff0000",
    type: "filter",
    id: "filter1",
    opacity: 0.5,
  };

const greenFilter: Filter = {
    colorOfFilter: "#00ff00",
    name: "greenFilter",
    type: "filter",
    id: "filter2",
    opacity: 0.5,
  };
  
const blueFilter: Filter = {
    name: "blueFilter",
    colorOfFilter: "#0000ff",
    type: "filter",
    id: "filter3",
    opacity: 0.5,
  };

const filterCollection: FilterCollection = [redFilter, greenFilter, blueFilter];

const selectionArea: SelectionArea = {
  id: "idSelect",
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

const template1: Template = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: "Only Civic photo with circle",
      fontSize: 20,
      fontFamily: "Georgia",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 300,
      y: 100,
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#13B474",
      backgroundImage: "",
      width: 100,
      height: 100,
      x: 350,
      y: 500,
    },
    {
      id: "img1",
      type: "image",
      width: 500,
      height: 300,
      x: 160,
      y: 150,
      url: "../../src/img/civic.jpg",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const templateCollection: TemplatesCollection = {
  templates: [template1],
};


const MinPage: CanvasProps = {
  id: "pagemin",
  width: 1000,
  height: 600,
  x: 50,
  y: 50,
  elements: [],
};

const MediumPage: CanvasProps = {
  id: "pagemed",
  width: 1600,
  height: 900,
  x: 50,
  y: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "Tут просто маленький текст",
      fontSize: 10,
      fontFamily: "Arial",
      color: "#000000",
      bold: false,
      width: 200,
      height: 100,
      x: 700,
      y: 20,
    },
    {
      id: "text2",
      type: "text",
      value: "А тут текст перед молнией",
      fontSize: 25,
      fontFamily: "Courier",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 700,
      y: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      x: 640,
      y: 300,
      url: "../../src/img/light.jpg",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const MaximumPage: CanvasProps = {
  id: "pagemax",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: "This is",
      fontSize: 20,
      fontFamily: "Georgian",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      x: 0,
      y: 0,
    },
    {
      id: "text2",
      type: "text",
      value: "Camry",
      fontSize: 17,
      fontFamily: "Georgian",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      x: 0,
      y: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 400,
      height: 300,
      x: 320,
      y: 300,
      url: "../../src/img/camry.jpg",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#00ffff",
      backgroundImage: "",
      width: 300,
      height: 300,
      x: 10,
      y: 250,
    },
    {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 200,
      height: 200,
      x: 600,
      y: 0,
    },
    redFilter,
  ],
};

const TemplatePage: CanvasProps = {
  id: "pagetem",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [...template1.blocks],
};

const historyCommands: HistoryCommands = {
  id: 1,
  history: [MinPage, MediumPage, MaximumPage, TemplatePage],
};

const doc: Doc = {
  canvas: historyCommands.history[historyCommands.id],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export default doc;