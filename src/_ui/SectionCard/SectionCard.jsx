import { Children } from "react";
import styles from "./SectionCard.module.css";

import classNames from "classnames";
import SectionDescriptionBox from "../SectionDescriptionBox/SectionDescriptionBox";

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
         
        </div>
      )}

      {type === "reverse_horizontal" && (
        <div className={styles.section_card_container}>
         
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
