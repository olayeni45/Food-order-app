import React, { useState } from "react";
import styles from "./css/HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";

const HeaderCartButton = (props) => {
  const [cartNumber, setCartNumber] = useState(0);

  const onButtonClick = () => {
    setCartNumber((prev) => (prev += 1));
  };

  return (
    <button className={styles.button} onClick={onButtonClick}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={`${styles.badge} `}>{cartNumber}</div>
    </button>
  );
};

export default HeaderCartButton;
