import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { cartActionTypes } from "./action";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case cartActionTypes.add: {
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case cartActionTypes.remove: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

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
    dispatchCartAction({ type: cartActionTypes.remove, id });
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
