import styles from "./Work.module.css";

import Footer from "../../_ui/Footer/Footer";
import ProjectCard from "../../_ui/ProjectCard/ProjectCard";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import RegButton from "../../_ui/RegButton/RegButton";
import Tag from "../../_ui/Tag/Tag";

import _cardData from "../../_cardData/_cardData.json";

function Work() {
  return (
    <div className={styles.page_container}>
      <NavBar />
      <div className={styles.section_title_container}>
          <h2 className={styles.section_title}>Work</h2>
          <div className={styles.filter_container}>
            <Tag tags={[" All"]} type="filter_active" />
            <Tag
              tags={["Frontend Development", "UI/UX", "Graphic Design"]}
              type="filter_regular"
            />
          </div>
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

      <div className={styles.footer_container}>
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Work;
