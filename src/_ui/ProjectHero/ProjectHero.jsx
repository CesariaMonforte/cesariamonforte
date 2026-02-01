import styles from "./ProjectHero.module.css";

import Tag from "../Tag/Tag";

function ProjectHero({ project }) {
  if (!project) return null;

  const {
    id,
    project_overview,
    Role,
    Duration,
    project_tags,
    project_hero_src,
  } = project;

  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_text}>
        <div className={styles.hero_text_header}>
          <h2 className={styles.hero_text_title}>{id}</h2>
          {project_overview && (
            <p className={styles.hero_text_description}>{project_overview}</p>
          )}
        </div>
        {Role != null && Role !== "" && (
          <div className={styles.hero_text_details}>
            <h3 className={styles.hero_text_details_header}>Role</h3>
            <p className={styles.hero_text_details_content}>{Role}</p>
          </div>
        )}
        {Duration != null && Duration !== "" && (
          <div className={styles.hero_text_details}>
            <h3 className={styles.hero_text_details_header}>Duration</h3>
            <p className={styles.hero_text_details_content}>{Duration}</p>
          </div>
        )}
        {project_tags && project_tags.length > 0 && (
          <div className={styles.hero_text_details}>
            <h3 className={styles.hero_text_details_header}>Tools</h3>
            <div className={styles.hero_text_details_content_tags}>
              {project_tags.map((tag, index) => (
                <Tag key={index} tags={tag} type="highlighted" />
              ))}
            </div>
          </div>
        )}
      </div>

      {project_hero_src && (
        <div className={styles.hero_image_container}>
          <img
            className={styles.hero_image}
            src={project_hero_src}
            alt={`${id} Hero`}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectHero;
