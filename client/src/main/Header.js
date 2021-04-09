import React from "react";
import "./Header.css";
import menu from "./menu_icon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header_page">
      <nav class="navbar navbar-expand-md navbar-custom fixed-top">
        <a class="navbar-brand" href="#">
          <Link to="home" class="nav-link">
            <h3>Chickpea</h3>
          </Link>
        </a>

        <button
          class="navbar-toggler"
          id="menu-icon-button"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <img id="menu-icon" src={menu}></img>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="storehome" class="nav-link">
                <p>Stores/Home</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="storepage" class="nav-link">
                <p>Stores/Page</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="signup" class="nav-link">
                <p>SignUp</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="signin" class="nav-link">
                <p>SignIn</p>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <form class="form-inline" action="#">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              ></input>
              <button class="btn" type="submit">
                Search
              </button>
            </form>

            <li class="nav-item">
              <a class="nav-link" href="#">
                HandBasket
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
