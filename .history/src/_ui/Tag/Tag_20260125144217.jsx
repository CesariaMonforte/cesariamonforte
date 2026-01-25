import styles from "./Tag.module.css";

function Tag({ tag_text, type }) {
    return (
        <>
            {type === "regular" && (
                <div className={styles.tag_regular_container}>
                    <span className={styles.tag_regular_text}>{tag_text}</span>
                </div>
            )}
            {type === "Highlight" && (
                <div className={styles.tag_highlight_container}>
                    <span className={styles.tag_highlight_text}>
                        {tag_text}
                    </span>
                </div>
            )}
        </>
    );
}

export default Tag;
