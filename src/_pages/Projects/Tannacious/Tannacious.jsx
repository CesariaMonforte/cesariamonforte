import styles from "./Tannacious.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import _cardData from "../../../_cardData/_cardData.json";

const IMAGERY_DESCRIPTION =
  "The imagery for Tannacious was chosen to evoke summer and natural warmth—from scenic landscapes to tropical sunsets—reinforcing the summertan beverage identity and target audience.";

const DIELINES_DESCRIPTION =
  "Dielines were created in Illustrator to define the exact cut, fold, and print areas for the can packaging. Each variant (earth, sunset, and ice) has a corresponding flat dieline showing nutrition facts, branding, and graphic placement for production.";

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
