import React, { Fragment } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="A table full of delicious meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;
