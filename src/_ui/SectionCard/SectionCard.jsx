import { Children } from "react";
import styles from "./SectionCard.module.css";

function SectionCard({
  section_title,
  section_description,
  section_image_src,
  type,
}) {
  return (
    <>
      {type === "horizontal" && (
        <div className={styles.section_card_container}>
          <h2 className={styles.section_card_title}>{section_title}</h2>
          <div className={styles.section_card_content}>
            <p className={styles.section_card_description}>
              {section_description}
            </p>
            <img
              className={styles.section_card_image}
              src={section_image_src}
              alt={section_title}
            />
          </div>
        </div>
      )}

      {type === "vertical" && (
        <div className={styles.section_card_container}>
          <h2 className={styles.section_card_title}>{section_title}</h2>
          <div className={styles.section_card_content_vertical}>
            <p className={styles.section_card_description}>
              {section_description}
            </p>
            <img
              className={styles.section_card_image_vertical}
              src={section_image_src}
              alt={section_title}
            />
          </div>
        </div>
      )}
      {type === "collection" && (
        <div className={styles.section_card_container}>
          <h2 className={styles.section_card_title}>{section_title}</h2>
          <div className={styles.section_card_content}>
            <p className={styles.section_card_description}>
              {section_description}
            </p>
            <div>Row of images here</div>
          </div>
        </div>
      )}
    </>
  );
}

export default SectionCard;
