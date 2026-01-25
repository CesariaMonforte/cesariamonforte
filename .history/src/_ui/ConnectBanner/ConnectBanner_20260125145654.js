import styles from './ConnectBanner.module.css';
import { createRegButton } from '../RegButton/RegButton.js';

export function createConnectBanner() {
    const bannerContainer = document.createElement('div');
    bannerContainer.className = styles.banner_container;
    
    const bannerText = document.createElement('h1');
    bannerText.className = styles.banner_text;
    bannerText.textContent = "Let's build meaningful work together";
    
    const connectButton = createRegButton("Let's Connect");
    
    bannerContainer.appendChild(bannerText);
    bannerContainer.appendChild(connectButton);
    
    return bannerContainer;
}
