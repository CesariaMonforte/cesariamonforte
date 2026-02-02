import RegButton from "../RegButton/RegButton";
import styles from "./ProjectPageNav.module.css";

function ProjectPageNav({ currentProjectId, projects = [] }) {
  const list = Array.isArray(projects) ? projects : [];
  const currentIndex = list.findIndex((p) => p.id === currentProjectId);
  const nextIndex = list.length > 0 ? (currentIndex + 1) % list.length : -1;
  const nextProject = nextIndex >= 0 ? list[nextIndex] : null;
  const nextLink = nextProject ? nextProject.project_link : "/Work";

  return (
    <nav className={styles.project_page_nav} aria-label="Project navigation">
      <RegButton button_text="Return Home" type="secondary" onclick="/" />
      <RegButton button_text="View Similar Case Study" type="secondary" onclick={nextLink} />
    </nav>
  );
}

export default ProjectPageNav;
