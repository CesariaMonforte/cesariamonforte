import styles from "./Tag.module.css";

export default function Tag({ tags, type, onClick }) {
  // Handle both single tag (string) and multiple tags (array)
  const tagList = Array.isArray(tags) ? tags : [tags];

  return (
    <>
      {type === "Regular" &&
        tagList.map((tag, index) => (
          <div key={index} className={styles.tag_regular_container}>
            <p className={styles.tag_regular_text}>{tag}</p>
          </div>
        ))}
      {type === "highlighted" &&
        tagList.map((tag, index) => (
          <div key={index} className={styles.tag_highlighted_container}>
            <p className={styles.tag_highlighted_text}>{tag}</p>
          </div>
        ))}

      {type === "filter_regular" &&
        tagList.map((tag, index) => (
          <div
            key={index}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            className={styles.filter_tag_regular_container}
            onClick={onClick ? () => onClick(String(tag).trim()) : undefined}
            onKeyDown={
              onClick
                ? (e) => e.key === "Enter" && onClick(String(tag).trim())
                : undefined
            }
          >
            <p className={styles.filter_tag_regular_text}>{tag}</p>
          </div>
        ))}
      {type === "filter_active" &&
        tagList.map((tag, index) => (
          <div
            key={index}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            className={styles.filter_tag_active_container}
            onClick={onClick ? () => onClick(String(tag).trim()) : undefined}
            onKeyDown={
              onClick
                ? (e) => e.key === "Enter" && onClick(String(tag).trim())
                : undefined
            }
          >
            <p className={styles.filter_tag_active_text}>{tag}</p>
            <div className={styles.filter_tag_active_underline}></div>
          </div>
        ))}
    </>
  );
}
