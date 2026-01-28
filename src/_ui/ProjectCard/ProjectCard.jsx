import styles from "./ProjectCard.module.css";
import Tag from "../Tag/Tag.jsx";
import RegButton from "../RegButton/RegButton.jsx";

function ProjectCard({
    type,
    project_title,
    project_description,
    project_image_src,
    project_tags,
}) {
    return (
        <>
            {type === "horizontal" && (
                <div className={styles.project_card_horizontal_container}>
                    <div
                        className={
                            styles.project_card_horizontal_image_container
                        }>
                        <img
                            className={styles.project_card_horizontal_image}
                            src={project_image_src}
                        />
                    </div>
                    <div className={styles.project_card_horizontal_content}>
                        <h2 className={styles.project_card_horizontal_title}>
                            {project_title}
                        </h2>
                        <p
                            className={
                                styles.project_card_horizontal_description
                            }>
                            {project_description}
                        </p>
                        <div className={styles.project_card_horizontal_tags}>
                            <Tag
                                tag_text={project_tags}
                                type='highlighted'
                            />
                            <Tag
                                tag_text={project_tags}
                                type='highlighted'
                            />
                            <Tag
                                tag_text={project_tags}
                                type='highlighted'
                            />
                        </div>
                        <div
                            className={
                                styles.project_card_horizontal_button_container
                            }>
                            <RegButton button_text='View Project' />
                        </div>
                    </div>
                </div>
            )}
            {type === "vertical" && <div>Vertical Project Card</div>}
        </>
    );
}

export default ProjectCard;
