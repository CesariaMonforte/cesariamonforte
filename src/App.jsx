import { useState } from "react";
import "./App.css";
import _cardData from "./_cardData/_cardData.json";

import NavBar from "./_ui/NavBar/NavBar";
import Footer from "./_ui/Footer/Footer";
import ConnectBanner from "./_ui/ConnectBanner/ConnectBanner";

import Tag from "./_ui/Tag/Tag";
import RegButton from "./_ui/RegButton/RegButton";
import ProjectCard from "./_ui/ProjectCard/ProjectCard";

function App() {
    function handleConnect() {}

    return (
        <div>
            <NavBar />

            <div>
                <h1>Cesaria Jose Monforte</h1>
                <p>Under Construction ! Stay tunned</p>
            </div>

            <div className='projects_container'>
                {_cardData.map((item) => (
                    <ProjectCard
                        type={item.type}
                        project_title={item.project_title}
                        project_description={item.project_description}
                        project_image_src={item.project_image_src}
                        project_tags={item.project_tags}
                    />
                ))}
            </div>

            <ConnectBanner />
            <Footer />
        </div>
    );
}

export default App;
