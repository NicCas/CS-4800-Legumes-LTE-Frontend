import React from "react";
import "./SignUp.css";
import username from "../assets/profile.png";
import name from "../assets/name.png";
import password from "../assets/password.png";
import email from "../assets/email.png";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      registered: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
  }

  register(){
    // axios call goes in here
    let currentComponent = this;
    axios("https://chickpeaapi.glitch.me/register/sign-up", {
      method: "post",
      data: {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      }
    })
    .then((res) => {
      console.log(res.data);
      currentComponent.setState({registered: true})
    })
  }

  render() {
    if(this.state.registered){
      return(
        <Redirect to="/signin" />
      );
    }
    return (
      <div id="sign-up-page">
      <div id="sign-up-card">
        <div class="sign-up-form">
            <h2 id="sign-up-title">
              <b>Sign Up</b>
            </h2>
            <label for="username">
              <div class="image-wrapper">
                <img src={username} class="image"></img>
                &nbsp;Username&nbsp;&nbsp;
              </div>
            </label>
            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <br />
            <label for="pw">
              <div class="image-wrapper">
                <img src={password} class="image"></img>
                &nbsp;Password&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <br />
            <label for="name">
              <div class="image-wrapper">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={name} class="image"></img>
                &nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
            <br />
            <label for="email">
              <div class="image-wrapper">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={email} class="image"></img>
                &nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
            <br />
            <input
              class="btn"
              type="submit"
              value="Sign Up"
              id="sign-up-button"
              onClick={()=>this.register()}
            ></input>
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
    </div>
    );
  }
}
