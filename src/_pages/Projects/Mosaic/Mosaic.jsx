import { useState } from "react";
import styles from "./Mosaic.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import SectionDescriptionBox from "../../../_ui/SectionDescriptionBox/SectionDescriptionBox";
import _cardData from "../../../_cardData/_cardData.json";
import CodeSnippetBox from "../../../_ui/CodeSnippetBox/CodeSnippetBox";
import RegButton from "../../../_ui/RegButton/RegButton";
import Tag from "../../../_ui/Tag/Tag";

const MOSAIC_FILTER_OPTIONS = ["Frontend Development", "UX/UI"];

function Mosaic() {
  const project = _cardData.find((p) => p.id === "Mosaic");
  const [activeFilter, setActiveFilter] = useState("Frontend Development");

  const majorChallenges = [
    "Efficiently rendering dynamic content and components from JSON data.",
    "Implementing dynamic styling and class names based on user interaction and data.",
    "Managing and persisting complex user data and application state across different components and sessions.",
  ];

  const componentTags = ["Button", "Input", "Card", "Alert", "Modal", "Tooltip", "Dropdown"];

  const dynamicStylingSolutions = [
    "Custom hooks and context API for centralized state management.",
    "CSS Modules and styled-components for dynamic styling.",
    "Conditional rendering to display components based on application state.",
    "Efficient data fetching and updates to ensure a smooth user experience.",
  ];

  const loginCodeSnippet = [
    {
      label: "Login.jsx",
      code: `function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.login_container}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <RegButton
        button_text="Log in"
        type="primary"
        onClick={() => {}}
      />
    </div>
  );
}`,
    },
  ];

  const skillTreesItems = [
    "Skill trees are rendered with a library (e.g. D3.js) for interactive visualizations.",
    "Each skill node is a component that dynamically renders its content based on fetched data.",
    "Users can interact with skill nodes to view more details or mark them as completed.",
  ];

  const dotComponentSnippet = [
    {
      label: "DotComponent.jsx",
      code: `function DotComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("blue");

  useEffect(() => {
    // Fetch dot data from API or context
  }, []);

  return (
    <div
      className={styles.dot}
      style={{
        left: position.x,
        top: position.y,
        backgroundColor: color,
      }}
    />
  );
}`,
    },
  ];

  const userFlows = [
    "Personalized Learning Path Creation and Progress Tracking.",
    "Interactive Skill Tree Navigation and Content Consumption.",
    "User Profile Management, Notifications, and Settings Configuration.",
  ];

  const finalResult = [
    "The platform delivers a functional and visual experience including personalized learning paths, progress tracking, interactive skill trees, Firebase integration, and a responsive user experience.",
    "The project demonstrates dynamic component rendering, state management, and API integration, serving as a strong portfolio piece for frontend and UX/UI development.",
  ];

  const classnamesDescription = [
    "Used throughout Mosaic to integrate readable code and support reusability through minor changes in styling.",
  ];

  return (
    <div className={styles.page_container}>
      <NavBar />
      <ProjectHero project={project} />

      {/* Filter */}
      <div className={styles.filter_section}>
        <p className={styles.filter_label}>Select a category</p>
        <div className={styles.filter_container}>
          {MOSAIC_FILTER_OPTIONS.map((option) => (
            <Tag
              key={option}
              tags={[option]}
              type={activeFilter === option ? "filter_active" : "filter_regular"}
              onClick={setActiveFilter}
            />
          ))}
        </div>
      </div>

      {activeFilter === "UX/UI" ? (
        <div className={styles.case_study_coming_soon}>
          <h2 className={styles.case_study_coming_soon_header}>Case Study Available soon</h2>
        </div>
      ) : (
        <>
      {/* Major Challenges and classnames - Utility library */}
      <div className={styles.section_container}>
        <div className={styles.major_challenges_column}>
          <SectionDescriptionBox title="Major Challenges" items={majorChallenges} />
          <div className={styles.classnames_section}>
           
            <SectionDescriptionBox title="Classnames - Utility library" items={classnamesDescription} />
          </div>
        </div>
        <div className={styles.classnames_image_wrapper}>
          <img
            className={styles.classnames_image}
            src="/ClassNames_Image.png"
            alt="Classnames - A simple JavaScript utility for conditionally joining classNames together."
          />
        </div>
      </div>

      {/* Dynamic Styling and State Management */}
      <div className={styles.section_container_reverse}>
        <CodeSnippetBox tabs={loginCodeSnippet} />
        <SectionDescriptionBox
          title="Dynamic Styling and State Management"
          items={dynamicStylingSolutions}
        />
      </div>

      {/* Location, States and Local Storage in Action */}
      <div className={styles.standalone_section}>
        <h2 className={styles.section_heading}>Location, States and Local Storage in Action</h2>
        <div className={styles.placeholder_mockup} aria-hidden="true">
          <span>Phone mockup</span>
        </div>
        <div className={styles.view_study_wrapper}>
          <RegButton button_text="View Full Study" type="primary" onClick="/" />
        </div>
      </div>

      {/* Dynamic Skill Trees in Action */}
      <div className={styles.section_container}>
        <SectionDescriptionBox title="Dynamic Skill Trees in Action" items={skillTreesItems} />
        <CodeSnippetBox tabs={dotComponentSnippet} />
      </div>

      {/* Dynamic Classnames in Action */}
      <div className={styles.standalone_section}>
        <h2 className={styles.section_heading}>Dynamic Classnames in Action</h2>
        <div className={styles.placeholder_mockup} aria-hidden="true">
          <span>Phone mockup</span>
        </div>
        <div className={styles.view_study_wrapper}>
          <RegButton button_text="View Full Study" type="primary" onClick="/" />
        </div>
      </div>

      {/* Components */}
      <div className={styles.standalone_section}>
        <h2 className={styles.section_heading}>Components</h2>
        <img
          className={styles.components_image}
          src="/Mosaic_Components.png"
          alt="Mosaic UI components and design system"
        />
      </div>

      {/* User Flows */}
      <div className={styles.section_single}>
        <SectionDescriptionBox title="User Flows" items={userFlows} />
      </div>

      {/* The Final Result */}
      <div className={styles.section_single}>
        <SectionDescriptionBox title="The Final Result" items={finalResult} />
      </div>
        </>
      )}

      <ConnectBanner />
      <Footer />
    </div>
  );
}

export default Mosaic;
