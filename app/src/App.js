import React, { Fragment, useState } from "react";
import Header from "./components/Navigation/Header";
import MealsSummary from "./components/Summary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import { DUMMY_MEALS } from "./static";

const App = () => {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  const onAddMeals = (meal) => {
    console.log("APP.js", meal);
  };

  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals meals={meals} />
    </Fragment>
  );
};

export default App;
