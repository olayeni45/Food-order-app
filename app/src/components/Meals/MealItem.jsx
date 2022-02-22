import React, { useContext } from "react";
import styles from "./css/MealItem.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const { id, name, description, price } = props;

  const formatPrice = `$${price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addItemToCart = (amount) => {
    cartCtx.addItem({ id, name, price, amount });
  };

  return (
    <Card className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>

      <div>
        <MealItemForm id={id} onAddItemToCart={addItemToCart} />
      </div>
    </Card>
  );
};

export default MealItem;
