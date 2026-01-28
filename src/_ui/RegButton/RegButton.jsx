import styles from "./RegButton.module.css";
import { useNavigate } from "react-router-dom";

function RegButton({ button_text, onclick, type }) {
  const navigate = useNavigate();

  return (
    <>
      {type === "primary" && (
        <div onClick={onclick} className={styles.button_reg}>
          {button_text}
        </div>
      )}

      {type === "secondary" && (
        <div
          onClick={() => navigate(onclick)}
          className={styles.button_secondary_reg}
        >
          {button_text}
        </div>
      )}
    </>
  );
}

export default RegButton;
