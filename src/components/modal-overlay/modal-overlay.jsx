import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ onClick }) => {
  return <div className={styles.cover} onClick={onClick} />;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;