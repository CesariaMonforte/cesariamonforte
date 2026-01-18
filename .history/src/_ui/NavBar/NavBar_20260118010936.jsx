import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar({
}) {

    return (
        <div>
          <img src={logo} alt="logo" />
        </div>
    );
}

export default NavBar;