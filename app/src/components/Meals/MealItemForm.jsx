import React from "react";
import styles from "./css/MealItemForm.module.css";
import Input from "../Input/Input";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
