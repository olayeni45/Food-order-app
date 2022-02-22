import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { label, input } = props;
  return (
    <div className={styles.input}>
      <label htmlFor="amount">{label}</label>
      <input {...input} ref={ref} />
    </div>
  );
});

export default Input;
