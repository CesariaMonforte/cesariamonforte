import styles from "./RegButton.module.css";

function RegButton({ button_text, onclick }) {
    return (
        <>
            <div onclick={onclick}>{button_text}</div>
        </>
    );
}
