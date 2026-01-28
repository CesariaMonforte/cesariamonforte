import styles from "./Tag.module.css";

export default function Tag({ tags, type }) {
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
          <div key={index} className={styles.filter_tag_regular_container}>
            <p className={styles.filter_tag_regular_text}>{tag}</p>
            <div className={styles.filter_tag_regular_underline}></div>
          </div>
        ))}
      {type === "filter_active" &&
        tagList.map((tag, index) => (
          <div key={index} className={styles.filter_tag_active_container}>
            <p className={styles.filter_tag_active_text}>{tag}</p>
            <div className={styles.filter_tag_active_underline}></div>
          </div>
        ))}
    </>
  );
}
