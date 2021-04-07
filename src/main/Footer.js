import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-page">
      <div id="temp-nav">
        <h3>Temporary Navigation Links</h3>
        <ul>
          <li>
            <Link to="storehome">
              <p>Stores Home</p>
            </Link>
          </li>
          <li>
            <Link to="storepage">
              <p>Store Page</p>
            </Link>
          </li>
          <li>
            <Link to="signin">
              <p>Sign In</p>
            </Link>
          </li>
          <li>
            <Link to="signup">
              <p>Sign Up</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
