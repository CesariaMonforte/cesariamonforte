import { Children } from "react";
import styles from "./SectionCard.module.css";

import classNames from "classnames";
import SectionDescriptionBox from "../SectionDescriptionBox/SectionDescriptionBox";

function SectionCard({
  section_title,
  section_description,
  section_image_src,
  Children,
  type,
}) {
  return (
    <>
      {type === "horizontal" && (
        <div className={styles.section_card_container}>
         <h1 className={styles.section_card_title}>
          {section_title}
         </h1>
         <p className={styles.section_card_description}>{section_description}</p>
         <img className={styles.section_card_image} src={section_image_src} alt={section_title} />
        </div>
      )}

      {type === "reverse_horizontal" && (
        <div className={styles.section_card_container}>
          <h1 className={styles.section_card_title}>
          {section_title}
         </h1>
          {Children}
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
