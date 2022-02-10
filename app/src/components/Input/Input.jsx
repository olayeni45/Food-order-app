import React from "react";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.input}>
      <label>Amount</label>
      <input type="number" step="1" min="0" />
    </div>
  );
};

export default Input;
