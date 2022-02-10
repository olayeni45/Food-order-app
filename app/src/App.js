import React, { Fragment, useState } from "react";
import Header from "./components/Navigation/Header";
import MealsSummary from "./components/Summary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import { DUMMY_MEALS } from "./static";

const App = () => {
  const [orderedAmount, setOrderedAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const onAddMeal = ({ id, name, price, amount }) => {
    setOrderedAmount((prev) => prev + amount);

    //Checking if cart is empty
    if (cartItems.length > 0) {
      const existingOrder = cartItems.find((c) => c.id === id);

      if (existingOrder) {
        const index = cartItems.indexOf(existingOrder);
        cartItems[index].amount += amount;
      } else {
        setCartItems((prev) => [...prev, { id, name, price, amount }]);
      }
    }
    //Else
    else {
      setCartItems((prev) => [...prev, { id, name, price, amount }]);
    }
  };

  return (
    <Fragment>
      <Header orderedAmount={orderedAmount} cart={cartItems} />
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} onAddMeal={onAddMeal} />
    </Fragment>
  );
};

export default App;
