import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { onCloseCart } = props;

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onCloseCart={onCloseCart}>
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((cart) => (
          <CartItem
            key={cart.id}
            name={cart.name}
            amount={cart.amount}
            price={cart.price}
            onAdd={cartItemAddHandler.bind(null, cart)}
            onRemove={cartItemRemoveHandler.bind(null, cart.id)}
          />
        ))}
      </ul>

      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
