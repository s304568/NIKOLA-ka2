import { Outlet, Link } from "react-router-dom";
import "./navBar.css";
import {
  INDEX_PATH,
  BiscuitClicker_PATH,
  TempetureCheeker_PATH
} from "../Constants/paths";

function NavBar() {
  return (
    <>
      <div className="Nav_Bar_Div">
        
        <nav>
          <ul>
            <li>
              <Link to={INDEX_PATH}>Home</Link>
        
            </li>
            <li>
              <Link to={BiscuitClicker_PATH}>Biscuit Clicker</Link>
            </li>
            <li>
              <Link to={TempetureCheeker_PATH}>Tempeture Cheeker</Link>
            </li>
    <p className="BiscuitCount">The Biscuit Count: 69</p>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
