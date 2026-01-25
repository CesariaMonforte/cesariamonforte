import styles from "./Tag.module.css";

export default function Tag({ tag_text, type }) {
    return (
        <>
            {type === "regular" && (
                <div className={styles.tag_regular_container}>
                    <p className={styles.tag_regulartext}>{tag_text}</p>
                </div>
            )}
        </>
    );
}
