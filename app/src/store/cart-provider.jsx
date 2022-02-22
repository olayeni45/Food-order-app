import React, { useReducer } from "react";
import CartContext from "./cart-context";
import cart_actions from "./actions";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case cart_actions.add: {
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        let updatedItem;
        updatedItem = {
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

    case cart_actions.remove: {
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
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: cart_actions.add, payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: cart_actions.remove, id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
