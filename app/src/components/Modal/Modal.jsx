import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import Cart from "../Cart/Cart";

const Backdrop = (props) => {
  const { onCloseModal } = props;
  return <div className={styles.backdrop} onClick={onCloseModal} />;
};

const ModalOverlay = (props) => {
  const { cartArray, onCloseModal } = props;
  return (
    <div className={styles.modal}>
      <Cart cart={cartArray} onCloseModal={onCloseModal} />
    </div>
  );
};

const Modal = (props) => {
  const { onCloseModal, cart } = props;
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay cartArray={cart} onCloseModal={onCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
