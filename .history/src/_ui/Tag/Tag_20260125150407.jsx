import styles from "./Tag.module.css";

export default function Tag({ tag_text, type }) {
    return (
        <>
            {type === "regular" && (
                <div className={styles.tag_container}>
                    <p className={styles.tag_text}>{tag_text}</p>
                </div>
            )}
        </>
    );
}
