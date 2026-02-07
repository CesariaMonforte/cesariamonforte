import { useState } from "react";
import styles from "./About.module.css";

import Footer from "../../_ui/Footer/Footer";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import AboutMeCard from "../../_ui/AboutMeCard/AboutMeCard";

const LIFE_BEYOND_IMAGES = [
  { src: "/LifeBeyond_1.png", alt: "Exploring Vancouver", caption: "Exploring Vancouver's coffee shops and waterfront" },
  { src: "/LifeBeyond_2.png", alt: "Everyday inspiration", caption: "Finding inspiration in everyday moments" },
  { src: "/LifeBeyond_3.png", alt: "Travel and cultures", caption: "Travel and discovering new cultures" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/cesariamonforte/", icon: "LinkedIn" },
  { label: "GitHub", url: "https://github.com/CesariaMonforte", icon: "GitHub" },
  { label: "TikTok", url: "https://www.tiktok.com/@Lifeascesaria", icon: "TikTok" },
];

function About() {
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div className={styles.page_container}>
      <NavBar />

      <div className={styles.section_title_container}>
        <h2 className={styles.section_title}>About Me</h2>
        <AboutMeCard imageSrc="/AboutMe_Profile.png" />
      </div>

      <section className={styles.life_beyond_section}>
        <h3 className={styles.life_beyond_heading}>Life beyond design and code</h3>
        <div className={styles.life_beyond_gallery}>
          <div className={styles.gallery_frame}>
            <img
              src={LIFE_BEYOND_IMAGES[galleryIndex].src}
              alt={LIFE_BEYOND_IMAGES[galleryIndex].alt}
              className={styles.gallery_image}
            />
            <div className={styles.gallery_caption}>
              {LIFE_BEYOND_IMAGES[galleryIndex].caption}
            </div>
          </div>
          <p className={styles.gallery_caption_mobile}>
            {LIFE_BEYOND_IMAGES[galleryIndex].caption}
          </p>
          <div className={styles.gallery_dots}>
            {LIFE_BEYOND_IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={i === galleryIndex ? styles.gallery_dot_active : styles.gallery_dot}
                onClick={() => setGalleryIndex(i)}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.connect_section}>
        <h3 className={styles.connect_heading}>Connect with me</h3>
        <p className={styles.connect_subtext}>Let's collaborate or chat — I'd love to hear from you!</p>
        <div className={styles.connect_links}>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connect_link}
            aria-label="View resume"
          >
            View Resume
          </a>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.icon}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connect_link}
              aria-label={link.label}
            >
              <img src={`/${link.icon}.svg`} alt="" className={styles.connect_icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
}

export default About;
