import React, { Fragment, useState } from "react";
import styles from "./css/Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart, onCloseModal } = props;
  const [cartArray, setCartArray] = useState(cart);
  let totalAmount = 0;

  if (cartArray.length > 0) {
    const totalArray = cartArray.map((cart) => cart.amount * cart.price);
    totalAmount = totalArray
      .reduce((prev, current) => prev + current)
      .toFixed(2);
  }

  const addItem = (id) => {
    console.log(
      "Add",
      cartArray.find((c) => c.id === id)
    );
  };

  const removeItem = (id) => {
    console.log(
      "Remove",
      cartArray.find((c) => c.id === id)
    );
  };

  console.log(cartArray);

  const cartSummary = (
    <Fragment>
      <div className={styles["cart-items"]}>
        {cartArray.map((cart) => (
          <CartItem
            key={cart.id}
            id={cart.id}
            name={cart.name}
            price={cart.price}
            amount={cart.amount}
            onAdd={addItem}
            onRemove={removeItem}
          />
        ))}
      </div>

      <div className={styles.total}>
        <div>Total Amount</div>
        <div>${totalAmount}</div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button--alt"]}
          onClick={onCloseModal}
        >
          Close
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => console.log("ordering...")}
        >
          Order
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {cartArray.length > 0 ? (
        cartSummary
      ) : (
        <h2 className={styles.empty}>Your cart is empty</h2>
      )}
    </Fragment>
  );
};

export default Cart;
