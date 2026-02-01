import styles from "./Tannacious.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import _cardData from "../../../_cardData/_cardData.json";

const IMAGERY_DESCRIPTION =
  "The imagery choice of Tannacious  was purely was on the idea of adventure and the feeling that comes with memories. Weather that be in a calming beach or skying from a cold mountain peak. ";

const DIELINES_DESCRIPTION =
  "Once the imagery was established and the information was iterated to clearly communicate Tannacious’s values and credibility, the final dieline was produced, ensuring consistency across all packaging variations.";

function Tannacious() {
  const project = _cardData.find((p) => p.id === "Tannacious");

  return (
    <div className={styles.page_container}>
      <NavBar />
      <ProjectHero project={project} />

      {/* Imagery */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Imagery</h2>
        <p className={styles.section_description}>{IMAGERY_DESCRIPTION}</p>
        <div className={styles.image_gallery_two}>
          <img
            className={styles.section_image}
            src="/Tannacious_Raw1.png"
            alt="Scenic landscape for Tannacious imagery"
          />
          <img
            className={styles.section_image}
            src="/Tannacious_Raw2.png"
            alt="Tropical sunset for Tannacious imagery"
          />
        </div>
      </section>

      {/* Illustrator Dielines */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Illustrator Dielines</h2>
        <p className={styles.section_description}>{DIELINES_DESCRIPTION}</p>
        <div className={styles.image_gallery_three}>
          <img
            className={styles.section_image}
            src="/Tannacious_D1.png"
            alt="Tannacious can dieline - variant 1"
          />
          <img
            className={styles.section_image}
            src="/Tannacious_D2.png"
            alt="Tannacious can dieline - variant 2"
          />
          <img
            className={styles.section_image}
            src="/Tannacious_D3.png"
            alt="Tannacious can dieline - variant 3"
          />
        </div>
      </section>

      {/* Image Gallery */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>Image Gallery</h2>
        <div className={styles.image_gallery_two}>
          <img
            className={styles.section_image}
            src="/Tannacious_Collection.png"
            alt="Tannacious cans collection"
          />
          <img
            className={styles.section_image}
            src="/Tannacious_Cover.png"
            alt="Tannacious product shot"
          />
        </div>
      </section>

      <div className="footer_section">
        <ConnectBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Tannacious;
