import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { onCloseCart } = props;

  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal onCloseCart={onCloseCart}>
      <ul className={styles["cart-items"]}>
        {cartItems.map((cart) => (
          <li>{cart.name}</li>
        ))}
      </ul>

      <div className={styles.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
