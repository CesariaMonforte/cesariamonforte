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
import SectionCard from "../../../_ui/SectionCard/SectionCard";
import ScrollReveal from "../../../_ui/ScrollReveal/ScrollReveal";

const MOSAIC_FILTER_OPTIONS = ["Frontend Development", "UX/UI"];

function Mosaic() {
    const project = _cardData.find((p) => p.id === "Mosaic");
    const [activeFilter, setActiveFilter] = useState("Frontend Development");

    const FocusFeatures = [
        "Create Profile: Form to set first name, last name, username, interests, about me, location, avatar, and social links. Data is validated and saved to localStorage.",
        "DescriptionBox: Reusable component for project descriptions with multiple style variants via `classnames` (primary, secondary, conditions).",
        "Validation & Popups:  Incomplete profile popup when required fields are missing; save confirmation when profile is successfully created.",
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
      `,
        },
    ];

    const ProfileCreation = [
        "Users create their profile from the Create Profile page.",
        "The form collects first name, last name, username, interests (selected via InterestChip), about me, location, and avatar.",
        "All fields are required before save.",
        " Data is persisted in `localStorage` as JSON.",
    ];
    const ProfileCreationCodeSnippet = [
        {
            label: "CreateProfile/page.js",
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


const saveProfileData = () => {
    const profileData = {
        firstName,
        lastName,
        username,
        aboutMe,
        location,
        interests: selectedInterests,
        avatar: selectedAvatar,
        socialMedia: {},
    };
    localStorage.setItem("userProfile", JSON.stringify(profileData));
};

const handleInterestClick = (interest) => {
    setSelectedInterests((prev) => {
        if (prev.includes(interest)) {
            return prev.filter((item) => item !== interest);
        } else {
            return [...prev, interest];
        }
    });
};


`,
        },
    ];

    const DescriptionBoxDescription = [
        "DescriptionBox is a reusable component that displays title, description, optional icon, subtitle, and second description.",
        "It uses classnames to apply different styles based on the useCase.",
        "Use cases are primary, secondary or conditions.",
        "Used in Portfolio Page",
    ];

    const DescriptionBoxCodeSnippet = [
        {
            label: "DescriptionBox.js",
            code: `
      import classNames from "classnames";
import styles from "./Description_Box.module.css";


function DescriptionBox({
    title,
    description,
    useCase,
    icon,
    subtitle,
    description2,
}) {
    const DescriptionClasses = classNames(styles.project_primary, {
        [styles.conditions]: useCase === "conditions",
        [styles.project_secondary]: useCase === "secondary",
    });


    return (
        <div className={DescriptionClasses}>
            <h1 className={styles.description_heading}>
                {icon && <span className={styles.icon}>{icon}</span>}
                {title}
            </h1>
            <p className={styles.description_body}>{description}</p>
            {subtitle && (
                <h2 className={styles.description_subtitle}>{subtitle}</h2>
            )}
            {description2 && (
                <p className={styles.description_body}>{description2}</p>
            )}
        </div>
    );
} `,
        },
        {
            label: "FishFriends/page.js",
            code: `
    <DescriptionBox
    title='Description'
    description='Dashboard Overview – Quick access to tank conditions...'
    useCase='secondary'
/>
<DescriptionBox
    title='Roles'
    description='UX Designer, UI Designer, Researcher'
    useCase='secondary'
/>
<DescriptionBox
    title='Tools Used'
    description='Figma, Adobe Illustrator, User Testing'
    useCase='secondary'
/>
  `,
        },
    ];

    // Missing variable definitions
    const mosaic_backbone = [
        "Time–consuming research for portfolio project ideas. ",
        "Finding projects that correlate to your goals and skills required.",
    ];
    const UsabilityTesting = [];
    const MosaicReflection = [
        "Using “Lorem ipsum” initially was a key mistake, as it hindered usability testing—users couldn’t relate to Mosaic’s function. Providing factual content is essential in UX research.",
        "Creating Mosaic taught me that small details—like placement, color, and sizing greatly impact user experience, and focusing on them makes larger tasks easier for users.",
        "While creating Mosaic, team ideas often differed, but keeping the user as the main focus helped me collaborate effectively and prioritize user needs.",
    ];
    const classnamesDescription = [];
    const EndGoals = [];
    const Reflection = [];

    const challenges = [
        "Description boxes which are similar but with minor differences needed to be created but i did not want to be redundant with creating multiple similar components. ",
        "Making sure that all the fields have data before it is saved for validation.",
    ];

    const addressingChallenges = [
        "Used Classnames to change styling for description boxes therefore one component used in multiple use cases.",
        "Used Classnames to change styling for description boxes therefore one component used in multiple use cases.",
    ];
    return (
        <div className={styles.page_container}>
            <NavBar />
            <ProjectHero project={project} />

            {/* Filter */}
            <ScrollReveal>
                <div className={styles.filter_section}>
                    <p className={styles.filter_label}>Select a category</p>
                    <div className={styles.filter_container}>
                        {MOSAIC_FILTER_OPTIONS.map((option) => (
                            <Tag
                                key={option}
                                tags={[option]}
                                type={
                                    activeFilter === option
                                        ? "filter_active"
                                        : "filter_regular"
                                }
                                onClick={(value) => {
                                    console.log(
                                        "Setting activeFilter to:",
                                        value,
                                    );
                                    setActiveFilter(value);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {activeFilter === "UX/UI" ? (
                <div className={styles.ux_section_container}>
                    <SectionDescriptionBox
                        title={"The Backbone Behind Mosaic"}
                        items={mosaic_backbone}
                    />

                    <SectionDescriptionBox
                        title={"How Mosaic connects with users"}
                        items={[]}
                    />
                    <section className={styles.connects_section}>
                        <div
                            className={`${styles.connects_row} ${styles.connects_row_reverse}`}>
                            <p className={styles.connects_label}>
                                AI Generated customizable project briefs
                            </p>
                            <div
                                className={`${styles.placeholder_mockup} ${styles.connects_mockup}`}>
                                <video
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    preload='auto'>
                                    <source
                                        src='/login.mp4'
                                        type='video/mp4'
                                    />
                                </video>
                            </div>
                        </div>
                    </section>

                    <section className={styles.connects_section_plain}>
                        <div
                            className={`${styles.connects_row} ${styles.connects_row_reverse}`}>
                            <p className={styles.connects_label}>
                                Projects Tracking Dashboard
                            </p>
                            <div
                                className={`${styles.placeholder_mockup} ${styles.connects_mockup}`}>
                                <video
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    preload='auto'>
                                    <source
                                        src='/Mosaic_DashboardToQuestionnaire.mp4'
                                        type='video/mp4'
                                    />
                                </video>
                            </div>
                        </div>
                        <div className={styles.view_study_wrapper}>
                            <RegButton
                                button_text='Explore WebApp'
                                type='secondary'
                                onClick='https://mosaic-app-nu.vercel.app/'
                            />
                        </div>
                    </section>

                    <SectionCard
                        type='horizontal'
                        section_title='Who is mosaic for?'
                        section_image_src={"/Mosaic_Persona's.png"}
                        section_description='Mosaic is for current college students and transitions professionals who are currently at the stage of building valuable projects.'
                    />
                    <SectionCard
                        type='horizontal'
                        section_title='User Flow'
                        section_image_src={"/Mosaic_UserFlow.png"}
                    />
                    <SectionCard
                        type='horizontal'
                        section_title='Low- Fidelity Prototype'
                        section_image_src={"/Mosaic_LoFi.png"}
                        section_description='After defining the problem and solution, we replaced confusing *Lorem ipsum* placeholder text with real content in the initial prototype to improve clarity and usability during testing.'
                    />
                    <div className={styles.view_study_wrapper}>
                        <RegButton
                            button_text='View Low Fidelity Prototype'
                            type='secondary'
                            onClick='https://www.figma.com/design/deU1qqMotAqD9kQ35jNCY6/A4---App-MockUp?node-id=969-8651&t=85X46nfxhxeREA8d-1'
                        />
                    </div>
                    <div className={styles.section_container}>
                        <div className={styles.major_challenges_column}>
                            <SectionDescriptionBox
                                title='Usability Testing'
                                items={UsabilityTesting}
                            />
                        </div>
                        <div className={styles.classnames_image_wrapper}>
                            <img
                                className={styles.classnames_image}
                                src='/Mosaic_UsabilityTesting.png'
                                alt='Classnames - A simple JavaScript utility for conditionally joining classNames together.'
                            />
                        </div>
                    </div>
                    <div className={styles.view_study_wrapper}>
                        <RegButton
                            button_text='View User Research Report'
                            type='secondary'
                            onClick='https://www.figma.com/deck/WLwshbz6vNPx3JrNOTrLin'
                        />
                    </div>
                    <SectionCard
                        type='horizontal'
                        section_title='High - Fidelity Prototype'
                        section_image_src={"/Mosaic_HiFi.png"}
                        section_description='People change, processes change and understanding of the visual representation may change. With that in mind, further testing was conducted to reach this final goal.'
                    />
                    <div className={styles.view_study_wrapper}>
                        <RegButton
                            button_text='View High Fidelity Prototype'
                            type='secondary'
                            onClick='https://www.figma.com/design/deU1qqMotAqD9kQ35jNCY6/A4---App-MockUp?node-id=969-8651&t=85X46nfxhxeREA8d-1'
                        />
                    </div>
                    <SectionCard
                        type='horizontal'
                        section_title='Styleguide'
                        section_image_src={"/Mosaic_Styleguide.png"}
                        section_description='People change, processes change and understanding of the visual representation may change. With that in mind, further testing was conducted to reach this final goal.'
                    />
                    <div className={styles.view_study_wrapper}>
                        <RegButton
                            button_text='Explore Styleguide'
                            type='secondary'
                            onClick='https://mosaicstyleguide.vercel.app/'
                        />
                    </div>
                    <div className={styles.major_challenges_column}>
                        <SectionDescriptionBox
                            title='The Reflection'
                            items={MosaicReflection}
                        />
                    </div>
                </div>
            ) : (
                <>
                    {/* Focus Features and classnames - Utility library */}
                    <ScrollReveal>
                        <div className={styles.section_container}>
                            <div className={styles.major_challenges_column}>
                                <SectionDescriptionBox
                                    title='Focus Features'
                                    items={FocusFeatures}
                                />
                                <div className={styles.classnames_section}>
                                    <SectionDescriptionBox
                                        title='Classnames - Utility library'
                                        items={classnamesDescription}
                                    />
                                </div>
                            </div>
                            <div className={styles.classnames_image_wrapper}>
                                <img
                                    className={styles.classnames_image}
                                    src='/ClassNames_Image.png'
                                    alt='Classnames - A simple JavaScript utility for conditionally joining classNames together.'
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Dynamic Classnames in Action */}
                    <ScrollReveal>
                        <div className={styles.standalone_section_blue}>
                            <div className={styles.standalone_section}>
                                <div
                                    className={`${styles.placeholder_mockup} ${styles.connects_mockup}`}>
                                    <video
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                        preload='auto'>
                                        <source
                                            src='/login.mp4'
                                            type='video/mp4'
                                        />
                                    </video>
                                </div>
                                <div className={styles.view_study_wrapper}>
                                    <RegButton
                                        button_text='View Full Login Flow'
                                        type='secondary'
                                        onClick='https://mosaic-app-nu.vercel.app/'
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Create Profile */}
                    <ScrollReveal>
                        <div className={styles.section_container_reverse}>
                            <CodeSnippetBox tabs={ProfileCreationCodeSnippet} />
                            <SectionDescriptionBox
                                title='Create Profile'
                                items={[ProfileCreation, FormAndState]}
                            />
                        </div>
                    </ScrollReveal>

                    {/* Dashboard View in Action */}
                    <ScrollReveal>
                        <div className={styles.standalone_section_blue}>
                            <div className={styles.standalone_section}>
                                <div
                                    className={`${styles.placeholder_mockup} ${styles.connects_mockup}`}>
                                    <video
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                        preload='auto'>
                                        <source
                                            src='/Mosaic_DashboardToQuestionnaire.mp4'
                                            type='video/mp4'
                                        />
                                    </video>
                                </div>
                                <div className={styles.view_study_wrapper}>
                                    <RegButton
                                        button_text='View Full Dashboard'
                                        type='secondary'
                                        onClick='https://mosaic-app-nu.vercel.app/'
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Description Box */}
                    <ScrollReveal>
                        <div className={styles.section_container_reverse}>
                            <CodeSnippetBox tabs={DescriptionBoxCodeSnippet} />
                            <SectionDescriptionBox
                                title='Description Box'
                                items={DescriptionBoxDescription}
                            />
                        </div>
                    </ScrollReveal>

                    {/* Components */}
                    <ScrollReveal>
                        <div className={styles.standalone_section}>
                            <h2 className={styles.section_heading}>
                                Components
                            </h2>
                            <img
                                className={styles.components_image}
                                src='/Mosaic_Components.png'
                                alt='Dynamic Styling with Classnames Utility'
                            />
                        </div>
                    </ScrollReveal>

                    {/* User Flows */}
                    <ScrollReveal>
                        <div className={styles.section_single}>
                            <SectionDescriptionBox
                                title='Challenges'
                                items={challenges}
                            />
                        </div>
                    </ScrollReveal>

                    {/* The Final Result */}
                    <ScrollReveal>
                        <div className={styles.section_single}>
                            <SectionDescriptionBox
                                title='Adressing Challenges'
                                items={addressingChallenges}
                            />
                        </div>
                    </ScrollReveal>
                </>
            )}

            <div className='footer_section'>
                <ProjectPageNav
                    currentProjectId='Mosaic'
                    projects={_cardData}
                />
                <ConnectBanner />
                <Footer />
            </div>
        </div>
    );
}

export default Mosaic;
