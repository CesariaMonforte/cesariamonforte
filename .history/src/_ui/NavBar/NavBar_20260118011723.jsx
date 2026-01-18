import styles from "./NavBar.module.css";

function NavBar({
}) {

    return (
        <div>
      
            <div className={styles.logo}>
            <img src="/Logo.svg" alt="logo" />
            </div> 
            
            <div>
                <a href="/">Home</a>
                <a href="/">Work</a>
                <a href="/">About</a>
                <div>
                Lets connect
                </div>
            </div>
      
        </div>
       
    );
}
export default NavBar;