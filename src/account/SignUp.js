import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div id="sign-up-page">
      <div class="sign-up-form">
        <form action="/register/sign-up" method="POST">
          <h2>Sign Up!</h2>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username"></input>
          <br />
          <label for="pw">Password:</label>
          <input type="password" id="pw" name="pw"></input>
          <br />
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"></input>
          <br />
          <label for="email">Email:</label>
          <input type="text" id="email" name="email"></input>
          <br />
          <input class="btn" type="submit" value="Submit"></input>
        </form>
      </div>
      <div id="extra-space-small"></div>
    </div>
  );
}

export default SignUp;
