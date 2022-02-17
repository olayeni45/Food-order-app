import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { cartActionTypes } from "./action";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartActionTypes.add: {
      const updatedItems = state.items.concat(payload);
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const { children } = props;

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: cartActionTypes.add, payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: cartActionTypes.remove, payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
