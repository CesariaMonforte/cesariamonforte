import styles from "./NavBar.module.css";

function NavBar({
}) {

    return (
        <>
      
            <div>
            <img src="/Logo.svg" alt="logo" />
            </div> 
            
            <div>
                <a href="/">Home</a>
                <a href="/">Work</a>
                <a href="/">About</a>
                <Button>
                Lets connect
                </Button>
            </div>
      
        </>
       
    );
}
export default NavBar;