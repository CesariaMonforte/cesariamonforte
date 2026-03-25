import styles from "./PopUp.module.css";
import RegButton from "../RegButton/RegButton";

function PopUp({ children, onClose }) {
    return (
        <div
            className={styles.popup}
            onClick={onClose}>
            <div
                className={styles.popupContent}
                onClick={(e) => e.stopPropagation()}>
                {children}
                <RegButton
                    type='primary'
                    button_text='Close'
                    onClick={onClose}>
                    Close
                </RegButton>
            </div>
        </div>
    );
}

export default PopUp;
