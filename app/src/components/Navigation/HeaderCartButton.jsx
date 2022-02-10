import React, { Fragment, useState } from "react";
import styles from "./css/HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import Modal from "../Modal/Modal";

const HeaderCartButton = (props) => {
  const { orderedAmount, cart } = props;
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <Fragment>
      <button className={styles.button} onClick={() => setShowModal(true)}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={`${styles.badge}`}>{orderedAmount}</div>
      </button>
      {showModal && <Modal onCloseModal={closeModal} cart={cart} />}
    </Fragment>
  );
};

export default HeaderCartButton;
