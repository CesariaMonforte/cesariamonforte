import styles from "./SectionDescriptionBox.module.css";

function SectionDescriptionBox({ title, items, fillHeight }) {
  const itemList = Array.isArray(items) ? items : [];

  return (
    <div className={`${styles.section_description_box} ${fillHeight ? styles.section_description_box_fill_height : ""}`}>
      {title && (
        <h2 className={styles.section_description_box_header}>{title}</h2>
      )}
      {itemList.length > 0 && (
        <div className={styles.section_description_box_list}>
          {itemList.map((item, index) => (
            <div
              key={index}
              className={styles.section_description_box_item}
            >
              <p className={styles.section_description_box_item_text}>
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SectionDescriptionBox;
