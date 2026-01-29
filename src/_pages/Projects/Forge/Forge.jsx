import style from "./Forge.module.css";

import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import connectBanner from "../../../_ui/ConnectBanner/ConnectBanner";

function Forge() {
  return (
    <div>
      <NavBar />
      <ProjectHero />
      Forge Page
      <connectBanner />
      <Footer />
    </div>
  );
}

export default Forge;
