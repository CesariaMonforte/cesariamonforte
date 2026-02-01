import { useState, useMemo, useRef, useEffect } from "react";
import styles from "./Home.module.css";

import Footer from "../../_ui/Footer/Footer";
import ProjectCard from "../../_ui/ProjectCard/ProjectCard";
import NavBar from "../../_ui/NavBar/NavBar";
import ConnectBanner from "../../_ui/ConnectBanner/ConnectBanner";
import RegButton from "../../_ui/RegButton/RegButton";
import Tag from "../../_ui/Tag/Tag";
import AboutMeCard from "../../_ui/AboutMeCard/AboutMeCard";

import _cardData from "../../_cardData/_cardData.json";

const FILTER_OPTIONS = ["All", "Frontend Development", "UX/UI", "Graphic Design"];

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const featuredRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = useMemo(
    () => [heroRef, aboutMeRef, featuredRef, filterRef, projectsRef, footerRef],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => sectionRefs.forEach((ref) => ref.current && observer.unobserve(ref.current));
  }, [sectionRefs, activeFilter]);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    setMouse({ x, y });
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return _cardData;
    return _cardData.filter((project) => {
      const cats = project.categories || (project.category ? [project.category] : []);
      return cats.includes(activeFilter);
    });
  }, [activeFilter]);

  return (
    <div
      className={styles.page_container}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      <NavBar />

      <div
        ref={heroRef}
        className={styles.hero_container}
        style={
          {
            "--mouse-x": `${mouse.x}deg`,
            "--mouse-y": `${mouse.y}deg`,
          }
        }
      >
        <div className={styles.diamond_wrapper_top}>
          <div className={styles.diamond_inner} />
        </div>
        <div className={styles.diamond_wrapper_bottom}>
          <div className={styles.diamond_inner} />
        </div>
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

      <div ref={aboutMeRef} className={styles.about_me_wrapper}>
        <AboutMeCard imageSrc="/AboutMe_Profile.png" />
      </div>

      <div ref={featuredRef} className={styles.section_title_container}>
        <h2 className={styles.section_title}>Featured Work</h2>
      </div>

      <div ref={filterRef} className={styles.section_title_container}>
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

      <div ref={projectsRef} className={styles.projects_container}>
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
      <div ref={footerRef} className={styles.footer_container}>
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
