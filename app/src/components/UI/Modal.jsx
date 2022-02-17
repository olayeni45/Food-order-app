import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  const { onCloseCart } = props;
  return <div className={styles.backdrop} onClick={onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  const { children } = props;
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { children, onCloseCart } = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
