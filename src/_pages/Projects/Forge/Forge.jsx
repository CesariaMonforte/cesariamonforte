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
    "Students have limited exposure to skilled trades careers beyond short job descriptions.",
    "Most existing tools focus on job search, not on helping students experience what a trade actually feels like day to day.",
    "Guidance counsellors need a simple way to show how skills, salary, and training paths change over time in skilled trades.",
    "Background research combined labour‑market reports, classroom interviews, and competitor audits to surface the core awareness gap around skilled trades.",
    "Early discovery sessions focused on understanding how students currently hear about trades careers and where guidance breaks down.",
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
    "Clarity over complexity: stripping UI and copy back to the essentials made it easier for students to compare paths.",
    "Designing with educators in mind changed the IA – sessions needed to fit into 10–15 minute classroom blocks.",
    "Future iterations will focus on adding more localized pathways (union vs non‑union, regional programs) without overloading the interface.",
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
    "Students struggled to connect with the AI simulation when outcomes felt static or overly serious; we needed to introduce playful rewards and clearer feedback loops.",
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

        {/* Who Forge is for */}
        <section className={style.wide_persona_section}>
         <SectionCard
            type="horizontal"
            section_title="Who Forge is for"
            section_image_src={"/Forge_UserPersona's.png"}
            section_description="Forge is for high school and early college students who are curious about skilled trades but don’t know where to start."
          />
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
          <div className={style.cta_button_wrapper}>
            <RegButton type="secondary" button_text="View user research report" onClick="/" />
          </div>
        </section>

        {/* How Forge connects to the users */}
        <section className={style.connects_section}>
          <h2 className={style.section_heading}>How Forge Connects to the Users</h2>
          <div className={style.connects_row}>
            <p className={style.connects_label}>AI‑powered career simulation</p>
            <div className={style.phone_mockup_wrapper}>
              <img
                src="/Forge_Simulation.png"
                alt="Forge AI career simulation screen"
                className={style.phone_mockup}
              />
            </div>
          </div>

          <div className={`${style.connects_row} ${style.connects_row_reverse}`}>
            <p className={style.connects_label}>Explore careers and rewards</p>
            <div className={style.phone_mockup_wrapper}>
              <img
                src="/Forge_Rewards.png"
                alt="Forge rewards and explore careers screens"
                className={style.phone_mockup}
              />
            </div>
          </div>

          <div className={style.connects_row}>
            <p className={style.connects_label}>Career map and stages</p>
            <div className={style.phone_mockup_wrapper}>
              <img
                src="/Forge_CareerMap.png"
                alt="Forge career map screen"
                className={style.phone_mockup}
              />
            </div>
          </div>
        </section>

        {/* competitive analysis */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>Competitive Analysis</h2>
          <img
            src="/Forge_CompetitiveAnalysis.png"
            alt="Forge competitive analysis"
            className={style.wide_image}
          />
          <SectionDescriptionBox
            title=""
            items={["We conducted a competitive analysis to understand the market and identify opportunities for Forge."]}
          />
        </section>

        {/* User Flow */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>User Flow</h2>
          <img
            src="/Forge_UserFlow.png"
            alt="Forge user flow diagram"
            className={style.wide_image}
          />
        </section>

        {/* Low‑Fidelity Prototype */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>Low‑Fidelity Prototype</h2>
          <img
            src="/Forge_LowFi.png"
            alt="Forge low‑fidelity wireframes"
            className={style.wide_image}
          />
          <div className={style.cta_button_wrapper}>
            <RegButton type="secondary" button_text="View full Lo‑Fi prototype" onClick="/" />
          </div>
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
          <div className={style.cta_button_wrapper}>
            <RegButton type="secondary" button_text="View full testing report" onClick="/" />
          </div>
        </section>

        {/* Biggest Challenge */}
        <div className={style.section_single}>
          <SectionDescriptionBox title="Biggest Challenge" items={biggestChallenge} />
        </div>

        {/* Gamification */}
        <div className={style.section_single}>
          <SectionDescriptionBox title="Gamification of AI Career Simulation" items={gamificationTakeaways} />
        </div>

        {/* High‑Fidelity Prototype */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>High‑Fidelity Prototype</h2>
          <img
            src="/Forge_HiFi.png"
            alt="Forge high‑fidelity screens"
            className={style.wide_image}
          />
        </section>

        {/* Landing Page */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>Landing Page</h2>
          <img
            src="/Forge_Landing.png"
            alt="Forge marketing landing page"
            className={style.wide_image}
          />
          <div className={style.cta_button_wrapper}>
            <RegButton type="secondary" button_text="View landing page" onClick="/" />
          </div>
        </section>

        {/* Styleguide */}
        <section className={style.wide_section}>
          <h2 className={style.section_heading}>Styleguide</h2>
          <img
            src="/Forge_Styleguide.png"
            alt="Forge brand styleguide"
            className={style.wide_image}
          />
          <div className={style.cta_button_wrapper}>
            <RegButton type="secondary" button_text="View styleguide" onClick="/" />
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
