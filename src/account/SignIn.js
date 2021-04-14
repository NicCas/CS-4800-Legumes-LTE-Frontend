import React from "react";
import "./SignIn.css";
import username from "../assets/profile.png";
import password from "../assets/password.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div id="sign-in-page">
      <div class="sign-in-field">
        <div id="sign-in-card">
          <form action="/login/attempt" method="POST" id="login-form">
            <h2 id="sign-in-title">
              <b>Sign In</b>
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
            <input
              id="sign-in-button"
              class="btn"
              type="submit"
              value="Sign In"
            ></input>
          </form>

          <div id="sign-up-link">
            <p>
              Don't have an account?
              <Link to="signup">
                {" "}
                <b>Sign Up Here!</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
