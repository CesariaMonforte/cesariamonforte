import styles from "./NavBar.module.css";

function NavBar({
}) {

    return (
        <div className={styles.navbar}>
      
            <div >
            <img src="/Logo.svg" alt="logo" className={styles.logo}/>
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