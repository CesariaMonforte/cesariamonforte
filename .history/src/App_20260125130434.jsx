import { useState } from "react";
import "./App.css";

import NavBar from "./_ui/NavBar/NavBar";
import Footer from "./_ui/Footer/Footer";
import RegButton from "./_ui/RegButton/RegButton";

function App() {
    return (
        <div>
            <NavBar />

            <div>
                <h1>Cesaria Jose Monforte</h1>
                <p>Under Construction ! Stay tunned</p>
            </div>

            <RegButton
                button_text="Let's Connect"
                onclick={handleConnect}
            />

            <Footer />
        </div>
    );
}

export default App;
