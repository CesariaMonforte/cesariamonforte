import styles from "./ParisToRomeBrochure.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import _cardData from "../../../_cardData/_cardData.json";

const MOODBOARD_DESCRIPTION =
  "I always start with creating a moodboard to set up the foundation for design direction.";

const ILLUSTRATION_DESCRIPTION =
  "Illustrations and layout spreads for the Paris and Rome sections of the brochure, from landmarks to typography and page design.";

const CONSIDERATIONS = [
  {
    title: "Imagery",
    text:"To focus on the idea of community and energy through images of people engaging inphysical activities such as paragliding and canyoning. ",
  },
  {
    title: "Credibility",
    text: "To emphasize on texture through close-up images of props such as the cobblestone streets in Rome and detailed shots of the architecture of touristic buildings (from the moodboard’s “Places” section) will be used.",
  },
  {
    title: "Color Palette",
    text: "to neutralize the bright color palette in the imagery a clean yellow was used in combination with white. The Use of the bright color pallet featuring yellows, oranges, light blues, and greens will create a fun and energetic mood while maintaining an aged, textured aesthetic.",
  },
];

function ParisToRomeBrochure() {
  const project = _cardData.find((p) => p.id === "Paris to Rome Brochure");

  return (
    <div className={styles.page_container}>
      <NavBar />
      <ProjectHero project={project} />

      <section className={styles.section}>
        <h2 className={styles.section_title}>Moodboarding</h2>
        <p className={styles.section_description}>{MOODBOARD_DESCRIPTION}</p>
        <div className={styles.section_image_single}>
          <img
            className={styles.section_image}
            src="/ParisToRome_Moodboard.png"
            alt="Paris to Rome brochure moodboard"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.section_title}>Illustration and Design</h2>
        <p className={styles.section_description}>{ILLUSTRATION_DESCRIPTION}</p>
        <div className={styles.image_gallery_pages}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <img
              key={n}
              className={styles.section_image}
              src={"/ParisToRome_Page" + n + ".png"}
              alt={"Paris to Rome brochure page " + n}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.section_title}>Image Gallery</h2>
        <div className={styles.image_gallery_three}>
          <img
            className={styles.section_image}
            src="/ParisToRome_Mock1.png"
            alt="Paris to Rome brochure mockup 1"
          />
          <img
            className={styles.section_image}
            src="/ParisToRome_Mock2.png"
            alt="Paris to Rome brochure mockup 2"
          />
          <img
            className={styles.section_image}
            src="/ParisToRome_Mock3.png"
            alt="Paris to Rome brochure mockup 3"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.section_title}>Considerations</h2>
        <div className={styles.considerations_layout}>
          <div className={styles.considerations_boxes}>
            {CONSIDERATIONS.map((item, i) => (
              <div key={i} className={styles.consideration_box}>
                <h3 className={styles.consideration_title}>{item.title}</h3>
                <p className={styles.consideration_text}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.considerations_image_wrapper}>
            <img
              className={styles.section_image}
              src="/ParisToRome_Considerations.png"
              alt="Paris to Rome brochure feedback session"
            />
          </div>
        </div>
      </section>

      <div className="footer_section">
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default ParisToRomeBrochure;
