import styles from "./Tag.module.css";
function Tag({ tag_text }) {
    return (
        <>
            <div className={styles.tag_container}>
                <span className={styles.tag_text}>{tag_text}</span>
            </div>
        </>
    );
}

export default Tag;
