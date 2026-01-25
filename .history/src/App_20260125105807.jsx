import { useState } from "react";
import "./App.css";

import NavBar from "./_ui/NavBar/NavBar";
import Footer from "./_ui/Footer/Footer";

function App() {
    return (
        <>
            <NavBar />

            <div>
                <h1>Cesaria Jose Monforte</h1>
                <p>Under Construction ! Stay tunned</p>
            </div>

            <a
                href='https://www.linkedin.com/in/cesariamonforte/'
                target='_blank'
                rel='noopener noreferrer'>
                Lets connect
            </a>

            <NavBar />
        </>
    );
}

export default App;
