import style from "./Forge.module.css";

import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import ConnectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import ProjectPageNav from "../../../_ui/ProjectPageNav/ProjectPageNav";
import _cardData from "../../../_cardData/_cardData.json";

function Forge() {
  const project = _cardData.find((p) => p.id === "Forge");

  return (
    <div className={style.page_container}>
      <NavBar />
      <ProjectHero project={project} />
      <div className={style.under_construction}>
        <h2 className={style.under_construction_header}>Forge is under construction</h2>
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
