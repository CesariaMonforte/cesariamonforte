import { useState } from "react";
import styles from "./Work.module.css";

import Footer from "../../_ui/Footer/Footer";
import ProjectCard from "../../_ui/ProjectCard/ProjectCard";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import RegButton from "../../_ui/RegButton/RegButton";

import _cardData from "../../_cardData/_cardData.json";

function Work() {
  return (
    <div>
      <NavBar />

      <div className={styles.section_title_container}>
        <h2 className={styles.section_title}>Featured Work</h2>
      </div>

      <div className={styles.projects_container}>
        {_cardData.map((item) => (
          <ProjectCard
            type="vertical"
            project_title={item.project_title}
            project_description={item.project_description}
            project_image_src={item.project_image_src}
            project_tags={item.project_tags}
            project_link={item.project_link}
          />
        ))}
      </div>

      <ConnectBanner />
      <Footer />
    </div>
  );
}

export default Work;
