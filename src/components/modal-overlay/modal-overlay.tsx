import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { FunctionComponent } from "react";

type TModalOverlay = {
  onClick: ()=> void;
}

const ModalOverlay:FunctionComponent<TModalOverlay> = ({ onClick }) => {
  return <div className={styles.cover} onClick={onClick} />;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
