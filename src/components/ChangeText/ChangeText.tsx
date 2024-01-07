import {
    DataMenuText,
    MenuText as MenuTextType,
    TextBlockProps,
    ImageBlockProps,
    CircleProps,
    RectangleProps,
    FilterProps,
  } from "../../types";
  import {
    Dispatch,
    HTMLInputTypeAttribute,
    MouseEvent,
    SetStateAction,
    ChangeEvent,
  } from "react";
  
  import {} from "../../types";
  import styles from "../ChangeText/ChangeText.module.css";
  
  type Props = {
    dataMenuText: DataMenuText;
    defaultMenuText: TextBlockProps;
    newElement: TextBlockProps;
    setNewElement: Dispatch<SetStateAction<TextBlockProps>>;
  };
  
  const MenuText = (props: Props) => {
    const { dataMenuText, newElement, setNewElement } = props;
  
    const changeColor = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      setNewElement((newElement) => ({
        ...newElement,
        color: element.getAttribute("data-color")!,
      }));
    };
  
    const changeFont = (e: ChangeEvent<HTMLSelectElement>) => {
      const target = e.target as HTMLSelectElement;
      setNewElement((newElement) => ({
        ...newElement,
        fontFamily: target.value,
      }));
    };
  
    const changeTextStyle = (e: ChangeEvent<HTMLInputElement>) => {
      setNewElement((newElement) => ({
        ...newElement,
        [`${e.target.value}`]: e.target.checked,
      }));
      console.log(e.target.value);
    };
  
    const changeTextElement = (e: ChangeEvent<HTMLInputElement>) => {
      setNewElement((newElement) => ({
        ...newElement,
        value: e.target.value,
      }));
    };
  
    const changeTextSize = (e: ChangeEvent<HTMLInputElement>) => {
      const fontSize = e.target.value === "" ? 0 : parseInt(e.target.value);
      setNewElement((newElement) => ({
        ...newElement,
        fontSize: fontSize,
      }));
    };
    console.log(dataMenuText);
    return (
      <div className={styles.menuText}>
        <select onChange={changeFont} className={styles.fontSelect} name="fontSelect" id="fontSelect">
          {dataMenuText.fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <div id="selectColor" className={styles.selectColor}>
          {dataMenuText.colors.map((color) => (
            <div key={color} className={styles.colorCheckboxWrapper}>
              <div
                onClick={changeColor}
                data-color={color}
                className={`${styles.colorLabel} ${
                  newElement.color === color ? styles.checkedColorCheckbox : null
                }`}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
        <input onChange={changeTextSize} className={styles.textSizeSelect} type="number" />
        <input
          onChange={changeTextElement}
          className={styles.changeText}
          type="text"
          value={newElement.value}
        />
        <div className={styles.checkboxWraper}>
          <label htmlFor="bold" className={styles.checkboxLabel}>Вold</label>
          <input id="bold" onChange={changeTextStyle} className={styles.checkbox} type="checkbox" value={"bold"} />
        </div>
  
        <div className={styles.checkboxWraper}>
          <label htmlFor="italic" className={styles.checkboxLabel}>Italic</label>
          <input id="italic" onChange={changeTextStyle} className={styles.checkbox} type="checkbox" value={"italic"} />
        </div>
  
        <div className={styles.checkboxWraper}>
          <label htmlFor="underline" className={styles.checkboxLabel}>Underline</label>
          <input id="underline" onChange={changeTextStyle} className={styles.checkbox} type="checkbox" value={"underline"} />
        </div>
      </div>
    );
  };
  
  export default MenuText;