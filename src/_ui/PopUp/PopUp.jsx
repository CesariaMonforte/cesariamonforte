import styles from "./PopUp.module.scss";
import RegButton from "../RegButton/RegButton";

function PopUp({ children, onClose }) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {children}
        <RegButton onClick={onClose}>Close</RegButton>
      </div>
    </div>
  );
}

export default PopUp;
