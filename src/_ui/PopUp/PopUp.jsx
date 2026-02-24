import styles from "./PopUp.module.css";
import RegButton from "../RegButton/RegButton";

function PopUp({ children, onClose }) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {children}
        <RegButton type="primary" button_text="Close" onClick={onClose}>
          Close
        </RegButton>
      </div>
    </div>
  );
}

export default PopUp;
