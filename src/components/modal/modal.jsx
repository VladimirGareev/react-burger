import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import PropTypes from "prop-types";



const modalsContainer = document.querySelector('#modals');

const Modal = ({ onOverlayClick, onEscKeydown, children, closeModal}) => {
 
  useEffect(() => {
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  
  return createPortal(
    <>
      <div className={styles.modal}>
        {children} 
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeButton}
        >
          <CloseIcon type="primary" />
        </button>
      </div>
      <ModalOverlay onClick={onOverlayClick} /> 
    </>,
    modalsContainer 
  );
};

export default Modal;