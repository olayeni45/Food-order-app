import React from "react";
import styles from "./css/MealItem.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price, onAddMeal } = props;

  return (
    <Card className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price}</div>
      </div>

      <div>
        <MealItemForm id={id} name={name} price={price} onAddMeal={onAddMeal} />
      </div>
    </Card>
  );
};

export default MealItem;
