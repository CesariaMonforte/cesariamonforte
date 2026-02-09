import style from "./Forge.module.css";

import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import ProjectPageNav from "../../../_ui/ProjectPageNav/ProjectPageNav";
import _cardData from "../../../_cardData/_cardData.json";
import SectionCard from "../../../_ui/SectionCard/SectionCard";
import SectionDescriptionBox from "../../../_ui/SectionDescriptionBox/SectionDescriptionBox";
import RegButton from "../../../_ui/RegButton/RegButton";

function Forge() {
  const project = _cardData.find((p) => p.id === "Forge");

  const forgeBackbone = [
    "Stigma and Misconceptions Around Trade Careers",
    "Late Exposure to Trade Career Pathways",
    "Complex and Overwhelming Trade Career Information",
    "Lack of Engaging and Guided Exploration",
  ];

  const forgeAudience = [
    "High school and early college students who are curious about skilled trades but don’t know where to start.",
    "Parents and educators who want neutral, visual tools to talk about non-traditional career paths.",
  ];

  const forgeExperiencePillars = [
    "Career pathways: interactive flows that show how a student can move from apprentice to journeyperson and beyond.",
    "Skills and finances: simple visuals that connect everyday tasks, required skills, and earning potential.",
    "Scenario-based simulations: short storylines that let students “test drive” trade decisions in a low‑pressure way.",
  ];

  const surveyQuestions = [
    "What words come to mind when you hear “skilled trades”?",
    "In your opinion, what do you think are the biggest challenges to starting a career in trades?",
    "What information do you wish was easier to find about trades?",
    "Have you ever researched specific trades (like electrician or plumber) to see what they require? If so, describe your research process.",
  ];

  const surveyStats = [
    { value: "77%", label: "Online info about trades was difficult to find or understand." },
    { value: "78%", label: "Discovered trades later in high school or post‑secondary." },
    { value: "89%", label: "Unsure about trade career requirements and next steps." },
  ];

  const forgeUsabilityInsights = [
    "Students preferred concrete scenarios (“You’re on a job site and…”) over abstract descriptions of duties.",
    "Too many choices at once overwhelmed testers; grouping decisions into small, guided steps increased completion.",
    "Progress indicators and plain‑language explanations increased trust in salary and training information.",
  ];

  const forgeReflection = [
    "Gamification is subjective and takes time to master:Integrating gamification in Forge was challenging due to time constraints, team size, and evolving user testing. ",
    "Collaboration and the importance of asking questions: Facing my limited backend knowledge, I learned to ask questions and understand integration limits, improving both the app experience and the overall process.",
    
  ];

  const usabilityWhatWorked = [
    "Step‑by‑step layouts helped testers understand each career decision without feeling rushed.",
    "Visual grouping of information (tasks, skills, salary) made complex concepts feel approachable.",
    "Clear labels and simple navigation reduced hesitation when moving between screens.",
  ];

  const usabilityWhatDidnt = [
    "Early versions packed too much copy into each screen, which testers described as “text heavy”.",
    "Some trade scenarios felt generic and didn’t reflect regional differences in training and pay.",
    "Too many navigation options at once created confusion about where to start.",
  ];

  const biggestChallenge = [
    "Negative engagement with the AI simulation led to the need for integrate gamification to improve awareness and user engagement.",
  ];

  const gamificationTakeaways = [
    "Layering in achievements and streaks gave students reasons to return and explore additional trades.",
    "Micro‑animations around key decisions made the simulation feel more alive and less like a static quiz.",
  ];

  return (
    <div className={style.page_container}>
      <NavBar />
      <ProjectHero project={project} />

      <div className={style.content_container}>
        {/* The Backbone Behind Forge */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>The Backbone Behind Forge</h2>
          <img
            src="/Forge_Backbone.png"
            alt="Research and background behind Forge"
            className={style.wide_image}
          />
          <SectionDescriptionBox title="" items={forgeBackbone} />
          
        </section>

        {/* Conducting Survey Research */}
        <section className={style.survey_section}>
          <h2 className={style.section_heading}>Conducting Survey Research</h2>
          <SectionDescriptionBox title="" items={surveyQuestions} />
          <div className={style.survey_stats_row}>
            {surveyStats.map((stat) => (
              <div key={stat.value} className={style.survey_stat_card}>
                <span className={style.survey_stat_value}>{stat.value}</span>
                <span className={style.survey_stat_label}>{stat.label}</span>
              </div>
            ))}
          </div>
         <div className={style.view_button_wrapper}>
            <RegButton
              button_text="View survey"
              type="secondary"
              onClick="https://docs.google.com/forms/d/e/1FAIpQLSe0QAYT08wSSV6ldgdtkvUlvAZIRqr8iSGJc-9OGONhrKWrSg/viewform?usp=publish-editor"
            />
          </div>
        </section>

      
        

        {/* How Forge connects to the users */}
        <section className={style.connects_section}>
          <h2 className={style.section_heading}>How Forge Connects to the Users</h2>

          {/* 1. Blue background */}
          <div className={`${style.connects_row} ${style.connects_row_blue}`}>
            <p className={style.connects_label}>AI‑powered career simulation</p>
            <div className={style.phone_mockup_wrapper}>
              <video
                className={style.phone_mockup}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/Forge_AICareerSimulation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 2. White background */}
          <div className={`${style.connects_row} ${style.connects_row_reverse} ${style.connects_row_white}`}>
            <p className={style.connects_label}>Explore careers and rewards</p>
            <div className={style.phone_mockup_wrapper}>
              <video
                className={style.phone_mockup}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/Forge_RewardsSystem.mp4" type="video/mp4" />
              </video>
            </div>
            
          </div>

          {/* 3. Blue background */}
          <div className={`${style.connects_row} ${style.connects_row_blue}`}>
            <p className={style.connects_label}>Career map and stages</p>
            <div className={style.phone_mockup_wrapper}>
              <video
                className={style.phone_mockup}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/Forge_CareerMap.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          
        </section>

        {/* competitive analysis */}
        <section className={style.wide_section}>
            <SectionCard
            type="horizontal"
            section_title="Competitive Analysis"
            section_image_src={"/Forge_CompetitiveAnalysis.png"}
            section_description="Similar trade-career platforms were identified and analyzed to understand their audiences, strengths, weaknesses, and features that could improve Forge’s user experience."
          />
          <div className={style.view_button_wrapper}>
            <RegButton
              button_text="View Full Competitive Analysis"
              type="secondary"
              onClick="https://docs.google.com/spreadsheets/d/1omj14jA1ioDrimYKsneCsO76D0EpJdACD75_rqFzWes/edit?usp=sharing"
            />
          </div>
        </section>
      {/* Who Forge is for */}
        <section className={style.wide_persona_section}>
         <SectionCard
            type="horizontal"
            section_title="Who Forge is for?"
            section_image_src={"/Forge_UserPersona's.png"}
            section_description="Forge is for high school and early college students who are curious about skilled trades but don’t know where to start."
          />
           <div className={style.view_button_wrapper}>
            <RegButton
              button_text="View User Research Report"
              type="secondary"
              onClick="https://docs.google.com/document/d/1rx5m_0iTsk1TUV9N3KJe2e_bMqo7XnFZlmtHl_rpwL0/edit?usp=sharing"
            />
          </div>
        </section>
        

        {/* User Flow */}
        <section className={style.wide_section}>
           <SectionCard
            type="horizontal"
            section_title="User Flow"
            section_image_src={"/Forge_UserFlow.png"}
            section_description="User flows were designed to ensure intuitive navigation, with a strong focus on essential interactions within the navigation bar for easy access."
          />
        </section>

        {/* Low‑Fidelity Prototype */}
        <section className={style.wide_section}>
            <SectionCard
            type="horizontal"
            section_title="Low - Fidelity Prototype"
            section_image_src={"/Forge_LowFi.png"}
            section_description="After defining technical and human needs, initial wireframes were created and tested, with results guiding usability improvements for high school users."
          />
         
        </section>

        {/* Usability Testing */}
        <section className={style.two_column_section}>
          <h2 className={style.section_heading}>Usability Testing</h2>
          <div className={style.two_column_section_inner}>
            <div>
              <img
                src="/Forge_UsabilityTesting.png"
                alt="Usability testing task flow and notes"
                className={style.wide_image}
              />
            </div>
            <div>
              <SectionDescriptionBox title="What worked?" items={usabilityWhatWorked} />
              <SectionDescriptionBox title="What didn’t work?" items={usabilityWhatDidnt} />
            </div>
          </div>
          <div className={style.view_button_wrapper}>
            <RegButton
              type="secondary"
              button_text="View user research report"
              onClick="https://docs.google.com/document/d/1rx5m_0iTsk1TUV9N3KJe2e_bMqo7XnFZlmtHl_rpwL0/edit?usp=sharing"
            />
          </div>
        </section>

        {/* Biggest Challenge */}
        <div className={style.section_single}>
          <SectionDescriptionBox title="Biggest Challenge" items={biggestChallenge} />
        </div>

        {/* Gamification */}
        <div className={style.section_single}>
           <SectionCard
            type="horizontal"
            section_title="Gamification of AI Career Simulation"
            section_image_src={"/Forge_GamificationPath.png"}
            section_description="This study defines the AI simulation gamification flow, identifying when users receive information and badges to support engagement."
          />
        </div>

        {/* High‑Fidelity Prototype */}
        <section className={style.wide_section}>
           <SectionCard
            type="horizontal"
            section_title="High‑Fidelity Prototype"
            section_image_src={"/Forge_HiFi.png"}
            section_description="Forge combines visuals and experience, using a cohesive color palette, logotype, typography, imagery, and symbolism to create a unified user experience."
          />
         
        </section>

        {/* Landing Page */}
        <section className={style.wide_section}>
              <SectionCard
            type="horizontal"
            section_title="Landing Page"
            section_image_src={"/Forge_Landing.png"}
            section_description="Forge combines visuals and experience, using a cohesive color palette, logotype, typography, imagery, and symbolism to create a unified user experience."
          />
        
          <div className={style.view_button_wrapper}>
            <RegButton
              type="secondary"
              button_text="View landing page"
              onClick="https://www.forgecareers.ca/"
            />
          </div>
        </section>

        {/* Styleguide */}
        <section className={style.wide_section}>
              <SectionCard
            type="horizontal"
            section_title="Styleguide"
            section_image_src={"/Forge_Styleguide.png"}
            section_description="Forge aligns visuals and experience by using a cohesive color palette, logotype, typography, imagery, and symbolism to create a unified user experience."
          />
        
          <div className={style.view_button_wrapper}>
            <RegButton
              type="secondary"
              button_text="View styleguide"
              onClick="https://www.figma.com/proto/wjKad59FcjjUYrbksNSFto/Forge---App-MockUp?node-id=979-7383&t=j2a4H3sgP5vxxVYJ-1"
            />
          </div>
        </section>

        {/* Final reflection */}
        <div className={style.section_single}>
          <SectionDescriptionBox title="The Reflection" items={forgeReflection} />
        </div>
      </div>

      <div className="footer_section">
        <ProjectPageNav currentProjectId="Forge" projects={_cardData} />
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Forge;
