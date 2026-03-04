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

const FILTER_OPTIONS = [
    "All",
    "Frontend Development",
    "UX/UI",
    "Graphic Design",
];
const TYPEWRITER_TEXT =
    "Creating Digital experiences\n that work for real people.";

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
        () => [
            heroRef,
            aboutMeRef,
            featuredRef,
            filterRef,
            projectsRef,
            footerRef,
        ],
        [],
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
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
        );
        sectionRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });
        return () =>
            sectionRefs.forEach(
                (ref) => ref.current && observer.unobserve(ref.current),
            );
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
            const cats =
                project.categories ||
                (project.category ? [project.category] : []);
            return cats.includes(activeFilter);
        });
    }, [activeFilter]);

    return (
        <div
            className={styles.page_container}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMouse({ x: 0, y: 0 })}>
            <NavBar />

            <div
                ref={heroRef}
                className={styles.hero_container}
                style={{
                    "--mouse-x": `${mouse.x}deg`,
                    "--mouse-y": `${mouse.y}deg`,
                }}>
                <div className={styles.diamond_wrapper_top}>
                    <div className={styles.diamond_inner} />
                </div>
                <div className={styles.diamond_wrapper_bottom}>
                    <div className={styles.diamond_inner} />
                </div>
                <div className={styles.hero_text}>
                    <h1 className={styles.header_phrase}>
                        <span className={styles.header_phrase_title}>
                            Vision to Interaction
                        </span>
                        <span className={styles.header_explanation}>
                            {typedText.split("\n").map((line, i) => (
                                <span key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                </span>
                            ))}
                            {!typewriterDone && (
                                <span
                                    className={styles.typewriter_cursor}
                                    aria-hidden>
                                    |
                                </span>
                            )}
                        </span>
                    </h1>
                </div>
                <div className={styles.hero_button_wrapper}>
                    <RegButton
                        button_text='Check Out My Work'
                        type='primary'
                        onClick={() =>
                            featuredRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        icon={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden>
                                <path
                                    d='M12 16L16 12L14.6 10.6L13 12.2V8H11V12.2L9.4 10.6L8 12L12 16ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z'
                                    fill='currentColor'
                                />
                            </svg>
                        }
                    />
                </div>
            </div>

            <div
                ref={aboutMeRef}
                className={styles.about_me_wrapper}>
                <AboutMeCard imageSrc='/AboutMe_Profile.png' />
            </div>

            <div
                ref={featuredRef}
                className={`${styles.section_title_container} ${styles.featured_work_heading}`}>
                <h2 className={styles.section_title}>Featured Work</h2>
            </div>

            <div
                ref={filterRef}
                className={styles.filter_row}>
                <p className={styles.filter_label}>Select a category</p>
                <div className={styles.filter_container}>
                    {FILTER_OPTIONS.map((option) => (
                        <Tag
                            key={option}
                            tags={[option]}
                            type={
                                activeFilter === option
                                    ? "filter_active"
                                    : "filter_regular"
                            }
                            onClick={setActiveFilter}
                        />
                    ))}
                </div>
            </div>

            <div
                ref={projectsRef}
                className={styles.projects_container}>
                {filteredProjects.map((item) => (
                    <ProjectCard
                        key={item.id}
                        type={item.type}
                        project_title={item.project_title}
                        project_description={item.project_description}
                        project_image_src={item.project_image_src}
                        project_roles={
                            item.project_roles ??
                            (item.id === "Mosaic"
                                ? ["Frontend Developer", "UX/UI Designer"]
                                : item.Role
                                  ? item.Role.split(/[|,]/)
                                        .map((r) => r.trim())
                                        .filter(Boolean)
                                  : [])
                        }
                        project_link={item.project_link}
                    />
                ))}
            </div>
            <div className={styles.view_all_projects_wrapper}>
                <RegButton
                    button_text='View all projects'
                    type='secondary'
                    onclick='/Work'
                />
            </div>
            <div
                ref={footerRef}
                className={styles.footer_container}>
                <ConnectBanner />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
