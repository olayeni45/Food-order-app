import React from "react";
import styles from "./css/Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>

      <div className={styles["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="meal"
        />
      </div>
    </div>
  );
};

export default Header;
