import "./index.css";
import { createNavBar } from "./_ui/NavBar/NavBar.js";
import { createFooter } from "./_ui/Footer/Footer.js";
import { createConnectBanner } from "./_ui/ConnectBanner/ConnectBanner.js";
import { createTag } from "./_ui/Tag/Tag.js";

function App() {
    const root = document.getElementById("root");

    const navBar = createNavBar();
    const mainContent = document.createElement("div");
    mainContent.innerHTML = `
        <h1>Cesaria Jose Monforte</h1>
        <p>Under Construction ! Stay tunned</p>
    `;

    const tag = createTag("Regular", "Regular Tag");
    mainContent.appendChild(tag);

    const connectBanner = createConnectBanner();
    const footer = createFooter();

    root.appendChild(navBar);
    root.appendChild(mainContent);
    root.appendChild(connectBanner);
    root.appendChild(footer);
}

App();
