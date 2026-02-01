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
    "Build the App using React component-based structure that is modular and scalable",
    "Manage form fields and modal visibility with useState.",
    "Integrate validation before submit and show feedback via PopUp","Eliminate Javascript component code redundancy by incorporating CSS",
  ];


  const FormAndState = [
    "Use of useState for every piece of UI and form data that can change",
    "Validate on submit and check if required fields are missing to return back error message",
    "Organize Validation logic in the same place location as submit handler so behaviour is predictable",
  
  ];

  const FormAndStateCodeSnippet = [
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

  const DynamicStylingItems = [
    "Use the `classnames` utility library library to apply one base class plus conditional variants",
    "Keeping components readable and styles predictable with `classnames` utility library.",
    "Layout changes with a useCase rather then creating two separate components",
  ];

  const DynamicStylingCodeSnippet = [
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

  const EndGoals = [
    "Persistent profile data via LocalStorage so the user’s Mosaic survives page refreshes..",
    "Reusable UI components (StatusBar, Button, PopUp, SingleInput, InterestChip, etc.) that keep the interface consistent and maintainable.",
    " Client-side validation so users see clear messages (e.g. “Please fill out all fields”) before data is saved or navigation happens.",
  ];

  const Reflection = [
    "Using libraries to keep code consistent and efficient : When i used conditional styling via `classnames` , it kept components such as the  Button and DescriptionBox simple and predictable; adding new variants (e.g. `terciary`, `warning`) was straightforward. It reduced supported in reusability. However a key thing that made an impact was naming convention which supported inp providing a cross-functional team.",
    "State and validation:Using `useState` for form fields and popup visibility, and validating before submit, gave clear feedback (“Please fill out all fields”) and kept invalid data from being saved or causing navigation. ",
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
        <CodeSnippetBox tabs={FormAndStateCodeSnippet} />
        <SectionDescriptionBox
          title="Form Validation and State Management"
          items={FormAndState}
        />
      </div>

      {/* Location, States and Local Storage in Action */}
      <div className={styles.standalone_section}>
        <h2 className={styles.section_heading}>Validation, States and Local Storage in Action</h2>
        <div className={styles.placeholder_mockup} aria-hidden="true">
          <span>Phone mockup</span>
        </div>
        <div className={styles.view_study_wrapper}>
          <RegButton button_text="View Full Study" type="primary" onClick="/" />
        </div>
      </div>

      {/* Dynamic Skill Trees in Action */}
      <div className={styles.section_container}>
        <SectionDescriptionBox title="Dynamic Styling with classnames utility" items={DynamicStylingItems} />
        <CodeSnippetBox tabs={DynamicStylingCodeSnippet} />
      </div>

      {/* Dynamic Classnames in Action */}
      <div className={styles.standalone_section}>
        <h2 className={styles.section_heading}>Dynamic Classnames in Action</h2>
        <div className={styles.placeholder_mockup} aria-hidden="true">
          <span>Phone mockup</span>
        </div>
        <div className={styles.view_study_wrapper}>
          <RegButton button_text="View Full WebMockup" type="primary" onClick="/" />
        </div>
      </div>

      {/* Components */}
      <div className={styles.standalone_section}>
        <h2 className={styles.section_heading}>Components</h2>
        <img
          className={styles.components_image}
          src="/Mosaic_Components.png"
          alt="Dynamic Styling with Classnames Utility"
        />
      </div>

      {/* User Flows */}
      <div className={styles.section_single}>
        <SectionDescriptionBox title="End Goals" items={EndGoals} />
      </div>

      {/* The Final Result */}
      <div className={styles.section_single}>
        <SectionDescriptionBox title="Reflection" items={Reflection} />
      </div>
        </>
      )}

      <ConnectBanner />
      <Footer />
    </div>
  );
}

export default Mosaic;
