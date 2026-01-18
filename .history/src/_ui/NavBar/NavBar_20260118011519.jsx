import styles from "./NavBar.module.css";

function NavBar({
}) {

    return (
        <div>
         <div>
         <img src="/Logo.svg" alt="logo" />
        </div> 
        <div>
            <a href="/">Home</a>
            <a href="/">Work</a>
            <a href="/">About</a>
            <Button>
                <a href="/">Lets connect</a>
            </Button>
        </div>
        </div>
    );
}
export default NavBar;