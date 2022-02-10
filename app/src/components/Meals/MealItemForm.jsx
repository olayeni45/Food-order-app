import React, { useState } from "react";
import styles from "./css/MealItemForm.module.css";
import Input from "../Input/Input";

const MealItemForm = (props) => {
  const { id, name, price, onAddMeal } = props;

  const [enteredAmount, setEnteredAmount] = useState(0);

  const inputHandler = (num) => setEnteredAmount(num);

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAmount > 0) {
      onAddMeal({ id, name, price, amount: enteredAmount });
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input onInputChange={inputHandler} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
