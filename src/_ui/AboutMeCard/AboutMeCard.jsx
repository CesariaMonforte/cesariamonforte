import styles from "./AboutMeCard.module.css";

const DEFAULT_HIGHLIGHTS = ["Cesaria", "Frontend Developer", "UX/UI Designer", "Graphic Designer"];

function highlightText(text, words = DEFAULT_HIGHLIGHTS) {
  if (!text) return null;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    words.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className={styles.highlight}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function AboutMeCard({
  imageSrc = "/AboutMe_Profile.png",
  name = "Cesaria Monforte",
  subtitle = "Frontend Developer, UX/UI Designer, and Graphic Designer",
  description = "Hi! I'm Cesaria! I'm a Frontend Developer, UX/UI Designer, and Graphic Designer professional based in Vancouver, British Columbia.",
  highlightWords = DEFAULT_HIGHLIGHTS,
}) {
  return (
    <div className={styles.card}>
    <div className={styles.container}>
      {/* The light blue background "blob" */}
      <div className={styles.bgShape}></div>

      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={name} className={styles.heroImage} />
        </div>

        {/* The text container that sits "in front" */}
        <div className={styles.textBanner}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.title}>{subtitle}</p>
        </div>
      </div>
    </div>
      <div className={styles.content}>
        <p className={styles.description}>{highlightText(description, highlightWords)}</p>
      </div>
    </div>
  );
}

export default AboutMeCard;
