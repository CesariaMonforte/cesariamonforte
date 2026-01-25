import styles from "./RegButton.module.css";

function RegButton({ button_text, onclick }) {
    return (
        <>
            <div
                onClick={onclick}
                className={styles.button_reg}>
                {button_text}
            </div>
        </>
    );
}

export default RegButton;
