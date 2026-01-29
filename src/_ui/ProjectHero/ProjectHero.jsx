import styles from "./ProjectHero.module.css";

import _cardData from "../../_cardData/_cardData.json";
import Tag from "../Tag/Tag";

function ProjectHero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_text}>
        <div className={styles.hero_text_header}>
          <h2 className={styles.hero_text_title}>{_cardData[0].id}</h2>
          <p className={styles.hero_text_description}>
            {_cardData[0].project_description}
          </p>
        </div>
        <div className={styles.hero_text_details}>
          <h3 className={styles.hero_text_details_header}>Role</h3>
          <p className={styles.hero_text_details_content}>
            {_cardData[0].Role}
          </p>
        </div>
        <div className={styles.hero_text_details}>
          <h3 className={styles.hero_text_details_header}>Duration</h3>
          <p className={styles.hero_text_details_content}>
            {_cardData[0].Duration}
          </p>
        </div>
        <div className={styles.hero_text_details}>
          <h3 className={styles.hero_text_details_header}>Tools</h3>
          <p className={styles.hero_text_details_content_tags}>
            {_cardData[0].project_tags.map((tag, index) => (
              <Tag key={index} tags={tag} type="highlighted" />
            ))}
          </p>
        </div>
      </div>

      <div className={styles.hero_image_container}>
        <img
          className={styles.hero_image}
          src={_cardData[0].project_hero_src}
          alt={`${_cardData[0].id} Hero`}
        />
      </div>
    </div>
  );
}

export default ProjectHero;
