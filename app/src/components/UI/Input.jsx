import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { label, input } = props;
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}> {label} </label>
      <input {...input} />
    </div>
  );
};

export default Input;
