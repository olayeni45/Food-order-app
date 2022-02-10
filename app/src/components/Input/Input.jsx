import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { onInputChange } = props;
  return (
    <div className={styles.input}>
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        step="1"
        min="0"
        id="amount"
        name="amount"
        onChange={(event) => {
          onInputChange(+event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
