import { Filter } from "../../types.tsx";
import styles from "./Filter.module.css";

const FilterComponent = (data: Filter) => {
  const styleProps = {
    opacity: data.opacity,
    backgroundColor: data.colorOfFilter,
  };

  return (
    <div style={styleProps} className={styles.filter}></div>
  );
};

export default FilterComponent;