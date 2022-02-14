import React from "react";
import styles from "./css/CartItem.module.css";

const CartItem = (props) => {
  const { id, price, name, amount, onAdd, onRemove } = props;
  const roundedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{roundedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onRemove(id)}>−</button>
        <button onClick={() => onAdd(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
