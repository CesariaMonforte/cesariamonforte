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
const TYPEWRITER_TEXT = "Creating Digital experiences\n that work for real people.";

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [startTypewriter, setStartTypewriter] = useState(false);

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

  useEffect(() => {
    if (typedText.length >= TYPEWRITER_TEXT.length) {
      setTypewriterDone(true);
      return;
    }
    const t = setTimeout(() => {
      setTypedText(TYPEWRITER_TEXT.slice(0, typedText.length + 1));
    }, 55);
    return () => clearTimeout(t);
  }, [typedText]);

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
            <span className={styles.header_phrase_title}>Vision to Interaction</span>
            <span className={styles.header_explanation}>
              {typedText.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              {!typewriterDone && <span className={styles.typewriter_cursor} aria-hidden>|</span>}
            </span>
          </h1>
        </div>
        <div className={styles.hero_button_wrapper}>
          <RegButton
            button_text="Check Out My Work"
            type="secondary"
            onClick={() => featuredRef.current?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>
      </div>

      <div className={styles.under_construction_container}>
        <h1 className={styles.under_construction_text}>thanks for scrolling - please note this site is still under construction</h1>
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
      <div className={styles.view_all_projects_wrapper}>
        <RegButton button_text="View all projects" type="secondary" onclick="/Work" />
      </div>
      <div ref={footerRef} className={styles.footer_container}>
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
