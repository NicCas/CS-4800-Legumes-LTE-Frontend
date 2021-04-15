import React from "react";
import "./SignIn.css";
import username from "../assets/profile.png";
import password from "../assets/password.png";
import { Link } from "react-router-dom";

import axios from "axios";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event){
    axios("https://chickpeaapi.glitch.me/login/attempt", {
      method: "post",
      data: {
        username : this.state.username,
        password : this.state.password
      },
      withCredentials: true
    })
    .then(function(response) {
      console.log(response.data);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div id="sign-in-page">
        <div class="sign-in-field">
          <div id="sign-in-card">
            <form onSubmit={this.handleSubmit}>
              <h2 id="sign-in-title">
                <b>Sign In</b>
              </h2>
  
              <label for="username">
                <div class="image-wrapper">
                  <img src={username} class="image"></img>
                  &nbsp;Username&nbsp;&nbsp;
                </div>
              </label>
              <input input type="text" id="username" name="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
              <br />
              <label for="pw">
                <div class="image-wrapper">
                  <img src={password} class="image"></img>
                  &nbsp;Password&nbsp;&nbsp;&nbsp;
                </div>
              </label>
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
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
}
