import { Link } from "react-router-dom";
import styles from "./ProjectPageNav.module.css";

function ProjectPageNav({ currentProjectId, projects = [] }) {
  const list = Array.isArray(projects) ? projects : [];
  const currentIndex = list.findIndex((p) => p.id === currentProjectId);
  const nextIndex = list.length > 0 ? (currentIndex + 1) % list.length : -1;
  const nextProject = nextIndex >= 0 ? list[nextIndex] : null;
  const nextLink = nextProject ? nextProject.project_link : "/Work";

  return (
    <nav className={styles.project_page_nav} aria-label="Project navigation">
      <Link to="/" className={styles.project_page_nav_link}>
        Return Home
      </Link>
      <Link to={nextLink} className={styles.project_page_nav_link}>
        View Similar Case Study
      </Link>
    </nav>
  );
}

export default ProjectPageNav;
