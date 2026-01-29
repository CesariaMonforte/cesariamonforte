import style from "./Forge.module.css";

import ProjectHero from "../../../_ui/ProjectHero/ProjectHero";
import NavBar from "../../../_ui/NavBar/NavBar";
import Footer from "../../../_ui/Footer/Footer";
import connectBanner from "../../../_ui/ConnectBanner/ConnectBanner";
import SectionCard from "../../../_ui/SectionCard/SectionCard";

function Forge() {
  return (
    <div>
      <NavBar />
      <ProjectHero />
      <SectionCard
        section_title={"Determining the Backbone Behind Forge"}
        section_description={
          "To ground Forge in real user needs, we developed two personas based on user research through survey data and online factual website. These personas represent students at different stages of their career exploration journey, helping guide decisions around tone, interaction, content depth, and accessibility."
        }
        section_image_src={"/Highschool_trade.png"}
        type={"horizontal"}
      />

      <SectionCard
        section_title={"Developing User Persona’s"}
        section_description={
          "To ground Forge in real user needs, we developed two personas based on user research through survey data and online factual website. These personas represent students at different stages of their career exploration journey, helping guide decisions around tone, interaction, content depth, and accessibility."
        }
        section_image_src={"/Forge_Personas.png"}
        type={"vertical"}
      />

      <SectionCard
        section_title={"Competitive Analysis"}
        section_description={
          "A list of similar platforms that provide awareness about careers in trades and guide users was then determined.Each platform ranged from singular websites to fully fledged apps that provide one or more similar functions to forge. They were analyzed to determine, the target audience, what works and what doesnt work and similar items that could be integrated into forge to provide a better user experience,"
        }
        section_image_src={"/Forge_Competitive.png"}
        type={"vertical"}
      />

      <connectBanner />
      <Footer />
    </div>
  );
}

export default Forge;
