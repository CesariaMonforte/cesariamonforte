import { useState } from "react";
import styles from "./About.module.css";

import Footer from "../../_ui/Footer/Footer";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import AboutMeCard from "../../_ui/AboutMeCard/AboutMeCard";
import RegButton from "../../_ui/RegButton/RegButton";

function About() {
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div className={styles.page_container}>
      <NavBar />

      <div className={styles.section_title_container}>
        <h2 className={styles.section_title}>About Me</h2>
        <AboutMeCard imageSrc="/AboutMe_Profile.png" />
      </div>
      <div className={styles.section_title_container}>
        <h2 className={styles.section_title}>Connect With me</h2>
      </div>

      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
}

export default About;
