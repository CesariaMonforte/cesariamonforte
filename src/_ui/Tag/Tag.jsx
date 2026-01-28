import styles from "./Tag.module.css";

export default function Tag({ tags, type }) {
    // Handle both single tag (string) and multiple tags (array)
    const tagList = Array.isArray(tags) ? tags : [tags];
    
    return (
        <>
            {type === "Regular" &&
                tagList.map((tag, index) => (
                    <div key={index} className={styles.tag_regular_container}>
                        <p className={styles.tag_regular_text}>{tag}</p>
                    </div>
                ))}
            {type === "highlighted" &&
                tagList.map((tag, index) => (
                    <div key={index} className={styles.tag_highlighted_container}>
                        <p className={styles.tag_highlighted_text}>{tag}</p>
                    </div>
                ))}
        </>
    );
}
