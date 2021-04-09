import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div id="sign-in-page">
      <div class="sign-in-field">
        <form action="/login/attempt" method="POST">
          <h2>Login</h2>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username"></input>
          <br />
          <label for="pw">Password:</label>
          <input type="password" id="pw" name="pw"></input>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <div id="extra-space-small"></div>
    </div>
  );
}

export default SignIn;
