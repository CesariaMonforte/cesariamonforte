import styles from './Tag.module.css';

export default function Tag({ children, ...props }) {
  return (
    <span className={styles.tag} {...props}>
      {children}
    </span>
  );
}
