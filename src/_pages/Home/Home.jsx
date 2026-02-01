import { useState, useMemo } from "react";
import styles from "./Home.module.css";

import Footer from "../../_ui/Footer/Footer";
import ProjectCard from "../../_ui/ProjectCard/ProjectCard";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import RegButton from "../../_ui/RegButton/RegButton";
import Tag from "../../_ui/Tag/Tag";

import _cardData from "../../_cardData/_cardData.json";

const FILTER_OPTIONS = ["All", "Frontend Development", "UI/UX", "Graphic Design"];

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return _cardData;
    return _cardData.filter((project) => {
      const cats = project.categories || (project.category ? [project.category] : []);
      return cats.includes(activeFilter);
    });
  }, [activeFilter]);

  return (
    <div className={styles.page_container}>
      <NavBar />

      <div className={styles.hero_container}>
        <div className={styles.diamond_top_right}></div>
        <div className={styles.diamond_bottom_left}></div>
        <div className={styles.hero_text}>
          <h1 className={styles.header_phrase}>
            Vision to Interaction
            <br />
            <span className={styles.header_explanation}>
              Creating Digital experiences
              <br /> that work for real people.
            </span>
          </h1>
        </div>
        <div className={styles.hero_button_wrapper}>
          <RegButton button_text={"Check Out My Work"} type={"primary"} onClick={"/Work"}/>
        </div>
      </div>

      <div className={styles.section_title_container}>
        <h2 className={styles.section_title}>Featured Work</h2>
      </div>

      <div className={styles.section_title_container}>
        <h2 className={styles.section_filter_text}>Select a category above</h2>
        <div className={styles.filter_container}>
          {FILTER_OPTIONS.map((option) => (
            <Tag
              key={option}
              tags={[option]}
              type={activeFilter === option ? "filter_active" : "filter_regular"}
              onClick={setActiveFilter}
            />
          ))}
        </div>
      </div>

      <div className={styles.projects_container}>
        {filteredProjects.map((item) => (
          <ProjectCard
            key={item.id}
            type={item.type}
            project_title={item.project_title}
            project_description={item.project_description}
            project_image_src={item.project_image_src}
            project_tags={item.project_tags}
            project_link={item.project_link}
          />
        ))}
      </div>
      <div className={styles.footer_container}>
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
