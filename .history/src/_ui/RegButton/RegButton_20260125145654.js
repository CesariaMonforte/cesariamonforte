import styles from './RegButton.module.css';

export function createRegButton(buttonText, onclick = null) {
    const buttonContainer = document.createElement('div');
    
    const button = document.createElement('div');
    button.className = styles.button_reg;
    button.textContent = buttonText;
    
    if (onclick) {
        button.addEventListener('click', onclick);
    }
    
    buttonContainer.appendChild(button);
    return buttonContainer;
}
