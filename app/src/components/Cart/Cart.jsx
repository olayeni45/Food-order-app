import React, { Fragment, useContext } from "react";
import styles from "./css/Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const { onCloseModal } = props;

  const cartCtx = useContext(CartContext);
  const { items, totalAmount, addItem, removeItem } = cartCtx;

  const hasItems = items.length > 0;

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  return (
    <Fragment>
      <div className={styles["cart-items"]}>
        {items.map((cart) => (
          <CartItem
            key={cart.id}
            name={cart.name}
            price={cart.price}
            amount={cart.amount}
            onAdd={cartItemAddHandler.bind(null, cart)}
            onRemove={cartItemRemoveHandler.bind(null, cart.id)}
          />
        ))}
      </div>

      <div className={styles.total}>
        <div>Total Amount</div>
        <div>${totalAmount.toFixed(2)}</div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button--alt"]}
          onClick={onCloseModal}
        >
          Close
        </button>
        {hasItems > 0 && (
          <button
            type="button"
            className={styles.button}
            onClick={() => console.log("ordering...")}
          >
            Order
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
