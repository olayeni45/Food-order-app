import React from "react";
import styles from "./css/AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
  const { meals } = props;

  return (
    <Card className={styles.meals}>
      <ul>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
