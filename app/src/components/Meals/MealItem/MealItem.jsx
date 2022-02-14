import React from "react";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, description, price } = props;
  const formatPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>

      <div></div>
    </li>
  );
};

export default MealItem;
