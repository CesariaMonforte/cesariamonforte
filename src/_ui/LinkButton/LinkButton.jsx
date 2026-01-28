import styles from "./LinkButton.module.css";
import { useNavigate } from "react-router-dom";

function LinkButton({ button_text, onclick }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(onclick)}
        className={styles.button_container}
      >
        {button_text}
      </div>
    </>
  );
}

export default LinkButton;
