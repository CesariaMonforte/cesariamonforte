import styles from "./Tag.module.css";

export function createTag(type, tagText) {
    const container = document.createElement("div");

    if (type === "Regular" || type === "regular") {
        const tagDiv = document.createElement("div");
        tagDiv.className = styles.tag_regular_container;

        const span = document.createElement("span");
        span.className = styles.tag_regular_text;
        span.textContent = tagText;

        tagDiv.appendChild(span);
        container.appendChild(tagDiv);
    } else if (type === "Highlight") {
        const tagDiv = document.createElement("div");
        tagDiv.className = styles.tag_highlight_container;

        const span = document.createElement("span");
        span.className = styles.tag_highlight_text;
        span.textContent = tagText;

        tagDiv.appendChild(span);
        container.appendChild(tagDiv);
    }

    return container;
}
