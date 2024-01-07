import {
  Doc,
  TextBlockProps,
  FilterProps,
  SelectionAreaProps,
  TemplateProps,
  TemplatesCollection,
  PageProps,
  Colors,
  Fonts,
  DataMenuText,
  HistoryCommands,
  FilterCollection,
} from "./types.tsx";

const redFilter: FilterProps = {
    name: "redFilter",
    colorOfFilter: "#ff0000",
    type: "filter",
    id: "filter1",
    opacity: 0.5,
    width: 800,
    height: 600,
    x: 0,
    y: 0,
  };

const greenFilter: FilterProps = {
    colorOfFilter: "#00ff00",
    name: "greenFilter",
    type: "filter",
    id: "filter2",
    opacity: 0.5,
    width: 800,
    height: 600,
    x: 0,
    y: 0,
  };
  
const blueFilter: FilterProps = {
    name: "blueFilter",
    colorOfFilter: "#0000ff",
    type: "filter",
    id: "filter3",
    opacity: 0.5,
    width: 800,
    height: 600,
    x: 0,
    y: 0,
  };

const filterCollection: FilterCollection = [redFilter, greenFilter, blueFilter];

const selectionArea: SelectionAreaProps = {
  type: "selectionArea",
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

const template1: TemplateProps = {
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
      italic: false,
      underline: false,
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#13B474",
      backgroundImage: "",
      width: 100,
      height: 100,
      x: 350,
      y: 470,
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
      pic: null,
    },
  ],
};

const templateCollection: TemplatesCollection = {
  templates: [template1],
};


const MinPage: PageProps = {
  id: "pagemin",
  width: 1000,
  height: 600,
  x: 50,
  y: 50,
  elements: [],
};

const MediumPage: PageProps = {
  id: "pagemed",
  width: 1200,
  height: 700,
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
      italic: false,
      underline: false,
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
      italic: false,
      underline: false,
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
      pic: null,
    },
  ],
};

const MaximumPage: PageProps = {
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
      italic: false,
      underline: false,
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
      italic: false,
      underline: false,
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
      pic: null,
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

const TemplatePage: PageProps = {
  id: "pagetem",
  width: 800,
  height: 600,
  x: 50,
  y: 50,
  elements: [...template1.blocks],
};

const historyCommands: HistoryCommands = {
  id: 3,
  history: [MinPage, MediumPage, MaximumPage, TemplatePage],
};

const colors: Colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffffff",
  "#000000",
];

const fonts: Fonts = [
  "Georgia",
  "Arial",
  "Courier",
];

const dataMenuText: DataMenuText = {
  colors: colors,
  fonts: fonts,
};

const defaultMenuText: TextBlockProps = {
  type: "text",
  id: "1",
  value: "Добавить текст",
  width: 200,
  height: 200,
  x: 400,
  y: 300,
  fontSize: 20,
  color: "#000000",
  fontFamily: "Roboto",
  bold: false,
  underline: false,
  italic: false,
};

const doc: Doc = {
  page: historyCommands.history[historyCommands.id],
  templateCollection,
  historyCommands,
  filterCollection,
  dataMenuText,
  defaultMenuText,
};

export default doc;