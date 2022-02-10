import React, { Fragment } from "react";
import styles from "./css/Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const { orderedAmount, cart } = props;
  return (
    <Fragment>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton orderedAmount={orderedAmount} cart={cart} />
      </div>

      <div className={styles["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="meal"
        />
      </div>
    </Fragment>
  );
};

export default Header;
