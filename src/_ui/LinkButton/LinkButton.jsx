import styles from "./LinkButton.module.css";

function LinkButton({ button_text, onclick }) {
    return (
        <>
            <div
                onClick={onclick}
                className={styles.button_container}>
                {button_text}
            </div>
        </>
    );
}

export default LinkButton;
