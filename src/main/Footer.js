import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-page">
      <div>
        <Navbar
          style={{
            backgroundColor: "#f8eac9",
            color: "#554ca9",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <NavbarBrand>
            <div id="logo-wrapper">
              <img src={logo} id="logo-img-footer"></img>
            </div>
          </NavbarBrand>
          <div class="footer-content">
            Thank you for shopping with <b>Chickpea</b>!
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default Footer;
