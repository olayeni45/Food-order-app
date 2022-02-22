import React from "react";
import Header from "./components/Navigation/Header";
import MealsSummary from "./components/Summary/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import { DUMMY_MEALS } from "./static";
import CartProvider from "./store/cart-provider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals meals={DUMMY_MEALS} />
      </main>
    </CartProvider>
  );
};

export default App;
