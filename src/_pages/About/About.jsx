import { useState } from "react";
import styles from "./About.module.css";

import Footer from "../../_ui/Footer/Footer";
import ProjectCard from "../../_ui/ProjectCard/ProjectCard";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import RegButton from "../../_ui/RegButton/RegButton";

import _cardData from "../../_cardData/_cardData.json";

function About() {
  return (
    <div>
      <NavBar />

      <div className={styles.section_title_container}>
        <h2 className={styles.section_title}>Featured Work</h2>
      </div>

      <ConnectBanner />
      <Footer />
    </div>
  );
}

export default About;
