import { useState } from "react";
import "./App.css";

import NavBar from "./_ui/NavBar/NavBar";
import Footer from "./_ui/Footer/Footer";
import RegButton from "./_ui/RegButton/RegButton";

function App() {
    function handleConnect() {}

    return (
        <div>
            <NavBar />

            <div>
                <h1>Cesaria Jose Monforte</h1>
                <p>Under Construction ! Stay tunned</p>
            </div>

            <Footer />
        </div>
    );
}

export default App;
