import styles from "./Tag.module.css";
function Tag({ tag_text, type }) {
    return (
        <>
            {type === "Active" && (
                <div className={styles.tag_highlight_container}>
                    <span className={styles.tag_highlight_text}>
                        {tag_text}
                    </span>
                </div>
            )}
            {type === "Blue" && (
                <div className={styles.tag_container}>
                    <span className={styles.tag_text}>{tag_text}</span>
                </div>
            )}
        </>
    );
}

export default Tag;
