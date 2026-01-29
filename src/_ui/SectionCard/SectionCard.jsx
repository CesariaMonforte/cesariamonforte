import { Children } from "react";
import styles from "./SectionCard.module.css";

import classNames from "classnames";

function SectionCard({
  section_title,
  section_description,
  section_image_src,
  section_bullets,
  type,
}) {
  return (
    <>
      {type === "horizontal" && (
        <div className={styles.section_card_container}>
          <div className={styles.section_card_content}>
            <div className={styles.section_card_text}>
              <h2 className={styles.section_card_title}>{section_title}</h2>
              {section_bullets && section_bullets.length > 0 && (
                <ul className={styles.section_card_list}>
                  {section_bullets.map((item, index) => (
                    <li key={index} className={styles.section_card_list_item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p className={styles.section_card_description}>
                {section_description}
              </p>
            </div>

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
