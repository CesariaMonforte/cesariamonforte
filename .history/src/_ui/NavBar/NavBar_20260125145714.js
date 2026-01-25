import styles from "./NavBar.module.css";
import { createRegButton } from "../RegButton/RegButton.js";

export function createNavBar() {
    const navbar = document.createElement("div");
    navbar.className = styles.navbar;

    const logoContainer = document.createElement("div");
    const logo = document.createElement("img");
    logo.src = "/Logo.svg";
    logo.alt = "logo";
    logo.className = styles.logo;
    logoContainer.appendChild(logo);

    const navLinks = document.createElement("div");
    navLinks.className = styles.navLinks;

    const homeLink = document.createElement("a");
    homeLink.href = "/";
    homeLink.textContent = "Home";

    const workLink = document.createElement("a");
    workLink.href = "/";
    workLink.textContent = "Work";

    const aboutLink = document.createElement("a");
    aboutLink.href = "/";
    aboutLink.textContent = "About";

    const connectButton = createRegButton("Let's Connect");

    navLinks.appendChild(homeLink);
    navLinks.appendChild(workLink);
    navLinks.appendChild(aboutLink);
    navLinks.appendChild(connectButton);

    navbar.appendChild(logoContainer);
    navbar.appendChild(navLinks);

    return navbar;
}
