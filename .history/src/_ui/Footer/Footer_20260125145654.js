import styles from './Footer.module.css';

export function createFooter() {
    const footerContainer = document.createElement('div');
    footerContainer.className = styles.footer_container;
    
    const logoConnectionContainer = document.createElement('div');
    logoConnectionContainer.className = styles.container_logo_connection;
    
    const logo = document.createElement('img');
    logo.src = '/Logo.svg';
    logo.alt = 'logo';
    logo.className = styles.logo;
    
    const connectionLinks = document.createElement('div');
    connectionLinks.className = styles.connection_links;
    
    const socialIcons = [
        { src: '/GitHub.svg', alt: 'GitHub' },
        { src: '/Instagram.svg', alt: 'Instagram' },
        { src: '/LinkedIn.svg', alt: 'LinkedIn' },
        { src: '/TikTok.svg', alt: 'TikTok' }
    ];
    
    socialIcons.forEach(icon => {
        const img = document.createElement('img');
        img.src = icon.src;
        img.alt = icon.alt;
        img.className = styles.connection;
        connectionLinks.appendChild(img);
    });
    
    logoConnectionContainer.appendChild(logo);
    logoConnectionContainer.appendChild(connectionLinks);
    
    const navLinks = document.createElement('div');
    navLinks.className = styles.navLinks;
    
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = 'Home';
    
    const workLink = document.createElement('a');
    workLink.href = '/';
    workLink.textContent = 'Work';
    
    const aboutLink = document.createElement('a');
    aboutLink.href = '/';
    aboutLink.textContent = 'About';
    
    navLinks.appendChild(homeLink);
    navLinks.appendChild(workLink);
    navLinks.appendChild(aboutLink);
    
    footerContainer.appendChild(logoConnectionContainer);
    footerContainer.appendChild(navLinks);
    
    return footerContainer;
}
