import React from "react";
import "./Header.css";
import menu from "../assets/menu_icon.png";
import stores from "../assets/stores.png";
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import basket from "../assets/handbasket.png";
import search from "../assets/search.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Account",
      account_link: "/signin",
      search_query: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://chickpeaapi.glitch.me/user", { withCredentials: true })
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.loggedIn) {
          this.setState({ username: data.Username, account_link: "/account" });
        } else {
          this.setState({ username: "Account", account_link: "/signin" });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ search_query: event.target.value });
  }
/*
  sendSearch() {
    axios("https://chickpeaapi.glitch.me/search/query", {
      method: "get",
      data: {
        searchInput: document.getElementById("query").value,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }*/

  render() {
    return (
      <div id="header_page">
        <nav class="navbar navbar-expand-md navbar-custom fixed-top">
          <a class="navbar-brand" href="#">
            <Link to="/home" class="nav-link">
              <div id="logo-wrapper">
                <img src={logo} id="logo-image"></img>
                <h3 class="title">Chickpea</h3>
              </div>
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
                <Link to="/storehome" class="nav-link">
                  <div class="header-wrapper">
                    <img src={stores} class="header-image"></img>
                    <b>Stores</b>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={this.state.account_link} class="nav-link">
                  <div class="header-wrapper">
                    <img src={profile} class="header-image"></img>
                    <b>{this.state.username}</b>
                  </div>
                </Link>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              <form class="form-inline" action="#">
                <img src={search} class="header-image"></img>
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  id="query"
                  name="search_query"
                  value={this.state.search_query} 
                  onChange={this.handleChange}
                ></input>

                {/* // document.getElementById("query").value should send the input from the search bar, but it is currently breaking the code
                  * I need some way for allowing it to be null
                
                <Link to={"/search/" + document.getElementById("query").value} class="nav-link">     */}
                <Link to={"/search/" + this.state.search_query} class="nav-link">
                  <button
                    class="btn"
                    type="submit"
                  >
                    Search
                  </button>
                </Link>
              </form>

              <li class="nav-item">
                <Link to="/handbasket" class="nav-link">
                  <div class="header-wrapper">
                    <img src={basket} class="header-image"></img>
                    <b>Handbasket</b>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
