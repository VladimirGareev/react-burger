import { FunctionComponent, ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";

type TModal = {
  children: ReactElement;
  closeModal: ()=>void;
}

const modalsContainer = document.querySelector("#modals") as HTMLElement;

const Modal:FunctionComponent<TModal> = ({ children, closeModal }) => {
  const onEscKeydown = (event:KeyboardEvent) => {
    if (event.key === "Escape") {closeModal()};
  };

  useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);

    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  });

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
      <ModalOverlay onClick={closeModal} />
    </>,
    modalsContainer
  );
};

export default Modal;
