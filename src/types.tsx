type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Position & Size;

type IdNumber = {
  id: string;
};

type TextBlockProps = Position & IdNumber & {
  type: "text";
  value: string;
  width: number;
  height: number;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

type ImageBlockProps = Block & IdNumber & {
    type: "image";
    url: string;
    allowedFormat: Array<string>;
    pic: HTMLImageElement | null;
  };

type GraphicObject = Block & IdNumber & {
  backgroundImage: string;
  backgroundColor: string;
};

type CircleProps = GraphicObject & {
  type: "circle";
};

type RectangleProps = GraphicObject & {
  type: "rectangle";
};

type FilterProps = Block & {
  name: string;
  type: "filter";
  id: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<FilterProps>;

type SelectionAreaProps = Block & {
  type: "selectionArea";
};

type TemplateProps = {
  id: string;
  name: string;
  blocks: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type TemplatesCollection = {
  templates: Array<TemplateProps>;
};

interface PageProps extends Block {
  id: string;
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type HistoryCommands = {
  id: number;
  history: Array<PageProps>;
};

type Colors = Array<string>;

type Fonts = Array<string>;

type DataMenuText = {
  colors: Colors;
  fonts: Fonts;
};

type MenuText = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

type Doc = {
  page: PageProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  dataMenuText: DataMenuText;
  defaultMenuText: TextBlockProps;
};

export type {
  Doc,
  TextBlockProps,
  Position,
  Size,
  Block,
  GraphicObject,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  SelectionAreaProps,
  TemplateProps,
  TemplatesCollection,
  PageProps,
  Colors,
  Fonts,
  MenuText,
  DataMenuText,
  HistoryCommands,
  FilterCollection,
  IdNumber,
};