type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Position &
  Size & {
    id: string;
  };

type TextBlockProps = Block & {
  type: "text";
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
};

type ImageBlock = Block & {
    type: "image";
    url: string;
    allowedFormat: Array<string>;
  };

type GraphicObject = Block & {
  backgroundImage: string;
  backgroundColor: string;
};

type Circle = GraphicObject & {
  type: "circle";
};

type Rectangle = GraphicObject & {
  type: "rectangle";
};

type Filter = {
  name: string;
  type: "filter";
  id: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<Filter>;

type SelectionArea = Block;

type Template = {
  id: string;
  name: string;
  blocks: Array<
    | TextBlockProps
    | ImageBlock
    | Filter
    | Circle
    | Rectangle
  >;
};

type TemplatesCollection = {
  templates: Array<Template>;
};

type CanvasProps = Block & {
  id: string;
  elements: Array<
    | TextBlockProps
    | ImageBlock
    | Filter
    | Circle
    | Rectangle
  >;
};

type HistoryCommands = {
  id: number;
  history: Array<CanvasProps>;
};

type Doc = {
  canvas: CanvasProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionArea;
};

export type {
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
};