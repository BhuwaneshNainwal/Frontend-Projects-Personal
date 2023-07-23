import { React } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

function Navbar() {
  return (
    <div id="nav-bar">
      <ul id="links">
        <li>
          <Link to="/" className="link">
            Popular
          </Link>
        </li>
        <li>
          <Link to="/Action" className="link">
            {" "}
            Action{" "}
          </Link>
        </li>
        <li>
          <Link to="/Horror"> Horror </Link>
        </li>
        <li>
          <Link to="/Comedy"> Comedy </Link>
        </li>
        <li>
          <Link to="/Romance"> Romance </Link>
        </li>
      </ul>
    </div>
  );
}

export { Navbar };
