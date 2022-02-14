import React from "react";
import { DUMMY_MEALS } from "../../static";
import styles from './AvailableMeals.module.css'

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
