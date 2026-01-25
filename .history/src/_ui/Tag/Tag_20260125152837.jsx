import styles from "./Tag.module.css";

export default function Tag({ tag_text, type }) {
    return (
        <>
            {type === "Regular" && (
                <div className={styles.tag_regular_container}>
                    <p className={styles.tag_regular_text}>{tag_text}</p>
                </div>
            )}
            {type === "highlighted" && (
                <div className={styles.tag_highlighted_container}>
                    <p className={styles.tag_highlighted_text}>{tag_text}</p>
                </div>
            )}
        </>
    );
}
