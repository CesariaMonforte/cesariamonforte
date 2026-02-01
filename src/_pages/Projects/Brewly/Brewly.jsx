import styles from "./Brewly.module.css";
import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import connectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import SectionCard from "../../../_ui/SectionCard/SectionCard";
import _cardData from "../../../_cardData/_cardData.json";

function Brewly() {
  const project = _cardData.find((p) => p.id === "Brewly");

  return (
    <div className={styles.page_container}>
      <NavBar />
      <ProjectHero project={project} />
      <SectionCard
        section_title={"Brewly"}
        section_description={"Brewly is a beer catalog web application that allows users to browse and search for beers."}
        section_image_src={"/Brewly_Hero.png"}
        section_bullets={[
          "Brewly is a beer catalog web application that allows users to browse and search for beers.",
          "Brewly is a beer catalog web application that allows users to browse and search for beers.",
          "Brewly is a beer catalog web application that allows users to browse and search for beers.",
        ]}
        type={"horizontal"}
      />
      <connectBanner />
      <Footer />
    </div>
  );
}

export default Brewly;