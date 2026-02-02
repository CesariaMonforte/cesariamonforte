import { useState } from "react";
import styles from "./Mosaic.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import ProjectPageNav from "../../../_ui/ProjectPageNav/ProjectPageNav";
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
      label: "PopUp.js",
      code: `
"use client";


import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./PopUp.module.css";
import Button from "../Button/Button";


export default function PopUp({
   onClose,
   children,
   buttonText = "Ok",
   buttonType = "primary",
   secondaryButtonText,
   secondaryButtonType = "orange",
   onSecondaryButtonClick,
}) {
   const [mounted, setMounted] = useState(false);


   useEffect(() => {
       setMounted(true);
       return () => setMounted(false);
   }, []);


   if (!mounted) return null;


   return createPortal(
       <>
           <div
               className={styles.popup_overlay}
               onClick={onClose}
           />
           <div className={styles.popup}>
               {children}
               <div className={styles.popup_buttons}>
                   {secondaryButtonText && (
                       <Button
                           value={secondaryButtonText}
                           type={secondaryButtonType}
                           onClick={onSecondaryButtonClick}
                       />
                   )}
                   <Button
                       value={buttonText}
                       type={buttonType}
                       onClick={onClose}
                   />
               </div>
           </div>
       </>,
       document.body,
   );
}
`,
    },
  ];

  const DynamicStylingItems = [
    "Use the `classnames` utility library library to apply one base class plus conditional variants",
    "Keeping components readable and styles predictable with `classnames` utility library.",
    "Layout changes with a useCase rather then creating two separate components",
  ];

  const DynamicStylingCodeSnippet = [
    {
      label: "Description_Box.js",
      code: `// Description_Box.js — Layout by useCase
const DescriptionClasses = classNames(styles.project_primary, {
   [styles.conditions]: useCase === "conditions",
   [styles.project_secondary]: useCase === "secondary",
});


return <div className={DescriptionClasses}>...</div>;
      `
    }
  ];

  const ProfileCreation = [
    "LocalStorage update once to avoid redundancy",
    "Use functional `setState` so you always work with the latest list.",
    " Guard against duplicates and case-insensitive duplicate collection names.",
  
  ];
  const ProfileCreationCodeSnippet = [
    {
      label: "SignIn.js",
      code: `const [Email, setEmail] = useState("");
const [showIncompleteProfilePopup, setShowIncompleteProfilePopup] =
   useState(false);


const handleCode = () => {
   if (!Email) {
       setShowIncompleteProfilePopup(true);
       return;
   } else {
       router.replace("/SignIn/VerificationCode");
   }
};
`,
    },{
      label: "CreateProfile.js",
      code: `const handleSave = () => {
   if (
       !firstName ||
       !lastName ||
       !username ||
       !aboutMe ||
       !location ||
       selectedInterests.length === 0 ||
       !selectedAvatar
   ) {
       setShowIncompleteProfilePopup(true);
       return;
   } else {
       saveProfileData();
       setShowSavePopup(true);
   }
};

      `
    }
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
      {/* Profile Creation and Local Storage */}
      <div className={styles.section_container_reverse}>
        <CodeSnippetBox tabs={ProfileCreationCodeSnippet} />
        <SectionDescriptionBox
          title="Profile Creation and Local Storage"
          items={ProfileCreation}
        />
      </div>

      {/* Validation, States and Local Storage in Action */}
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

      <div className="footer_section">
        <ProjectPageNav currentProjectId="Mosaic" projects={_cardData} />
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Mosaic;
