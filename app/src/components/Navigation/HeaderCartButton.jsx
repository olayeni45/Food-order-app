import React, { Fragment, useState, useContext, useEffect } from "react";
import styles from "./css/HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import Modal from "../Modal/Modal";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [btnAnimate, setBtnAnimate] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((prev, item) => {
    return prev + item.amount;
  }, 0);

  const closeModal = () => setShowModal(false);

  const btnClasses = `${styles.button} ${btnAnimate ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimate(true);

    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Fragment>
      <button className={btnClasses} onClick={() => setShowModal(true)}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={styles.badge}>{numberOfCartItems}</div>
      </button>
      {showModal && <Modal onCloseModal={closeModal} />}
    </Fragment>
  );
};

export default HeaderCartButton;
