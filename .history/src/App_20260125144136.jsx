import { useState } from "react";
import "./App.css";

import NavBar from "./_ui/NavBar/NavBar";
import Footer from "./_ui/Footer/Footer";
import ConnectBanner from "./_ui/ConnectBanner/ConnectBanner";

import RegButton from "./_ui/RegButton/RegButton";
import Tag from "./_ui/Tag/Tag";

function App() {
    function handleConnect() {}

    return (
        <div>
            <NavBar />

            <div>
                <h1>Cesaria Jose Monforte</h1>
                <p>Under Construction ! Stay tunned</p>
                <Tag />
            </div>

            <ConnectBanner />
            <Footer />
        </div>
    );
}

export default App;
