import styles from "./LinkButton.module.css";
import { useNavigate } from "react-router-dom";

function LinkButton({ button_text, onclick, onClick: onCustomClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(onclick);
    onCustomClick?.();
  };

  return (
    <div onClick={handleClick} className={styles.button_container}>
      {button_text}
    </div>
  );
}

export default LinkButton;
