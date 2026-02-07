import styles from "./RegButton.module.css";
import { useNavigate, Link } from "react-router-dom";

function RegButton({ button_text, icon, onclick, onClick, type }) {
  const navigate = useNavigate();
  const handler = onClick ?? onclick;
  const isNavToPath = typeof handler === "string";
  const isExternalLink = isNavToPath && /^https?:\/\//i.test(handler);
  const isInternalLink = isNavToPath && !isExternalLink;

  const handlePrimaryClick = (e) => {
    if (typeof handler === "function") {
      handler(e);
    } else if (typeof handler === "string") {
      navigate(handler);
    }
  };

  const handleSecondaryClick = (e) => {
    if (typeof handler === "function") {
      handler(e);
    } else if (typeof handler === "string") {
      navigate(handler);
    }
  };

  if (type === "primary") {
    const content = (
      <>
        {button_text}
        {icon}
      </>
    );
    if (isExternalLink) {
      return (
        <a
          href={handler}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button_reg}
        >
          {content}
        </a>
      );
    }
    if (isInternalLink) {
      return (
        <Link to={handler} className={styles.button_reg}>
          {content}
        </Link>
      );
    }
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={handlePrimaryClick}
        onKeyDown={(e) => e.key === "Enter" && handlePrimaryClick(e)}
        className={styles.button_reg}
      >
        {content}
      </div>
    );
  }

  if (type === "secondary") {
    const content = (
      <>
        {button_text}
        {icon}
      </>
    );
    if (isExternalLink) {
      return (
        <a
          href={handler}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button_secondary_reg}
        >
          {content}
        </a>
      );
    }
    if (isInternalLink) {
      return (
        <Link to={handler} className={styles.button_secondary_reg}>
          {content}
        </Link>
      );
    }
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={handleSecondaryClick}
        onKeyDown={(e) => e.key === "Enter" && handleSecondaryClick(e)}
        className={styles.button_secondary_reg}
      >
        {content}
      </div>
    );
  }

  return null;
}

export default RegButton;
