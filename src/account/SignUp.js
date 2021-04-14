import React from "react";
import "./SignUp.css";
import username from "../assets/profile.png";
import name from "../assets/name.png";
import password from "../assets/password.png";
import email from "../assets/email.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div id="sign-up-page">
      <div id="sign-up-card">
        <div class="sign-up-form">
          <form action="/register/sign-up" method="POST" id="sign-up-form">
            <h2 id="sign-up-title">
              <b>Sign Up</b>
            </h2>
            <label for="username">
              <div class="image-wrapper">
                <img src={username} class="image"></img>
                &nbsp;Username&nbsp;&nbsp;
              </div>
            </label>
            <input type="text" id="username" name="username"></input>
            <br />
            <label for="pw">
              <div class="image-wrapper">
                <img src={password} class="image"></img>
                &nbsp;Password&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <input type="password" id="pw" name="pw"></input>
            <br />
            <label for="name">
              <div class="image-wrapper">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={name} class="image"></img>
                &nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <input type="text" id="name" name="name"></input>
            <br />
            <label for="email">
              <div class="image-wrapper">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={email} class="image"></img>
                &nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <input type="text" id="email" name="email"></input>
            <br />
            <input
              class="btn"
              type="submit"
              value="Sign Up"
              id="sign-up-button"
            ></input>
          </form>
        </div>
        <div id="sign-up-link">
          <p>
            Already have an account?
            <Link to="signin">
              {" "}
              <b>Sign In Here!</b>
            </Link>
          </p>
        </div>
      </div>

      <div id="extra-space-small"></div>
    </div>
  );
}

export default SignUp;
