import React from "react";
import "./StorePage.css";
import axios from "axios";
import backsplash from "../assets/backsplash_placeholder.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { lazy } from "react";
//import item from "./item_placeholder.png";
import item from "../assets/item_placeholder.png";
const Header = lazy(() => import("../main/Header"));
const Footer = lazy(() => import("../main/Footer"));

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // axios request will go in here
    axios("https://chickpeaapi.glitch.me/stores", {
      method: "post",
      data: {
        item: this.state.item
      }
    }).then(function(response) {
      console.log(response.data);
    });
    event.preventDefault();
    // grabbing url parameter /:store_id
    //console.log(this.props.match.params);
  }

  render() {
    return (
      <div id="store-page">
        <div>
          <img src={backsplash} id="backsplash"></img>
        </div>

        <div class="container-fluid">
          <div class="row">
            <nav class="col-sm-3 col-4" id="myScrollspy">
              <ul class="nav nav-pills flex-column" id="test-pills">
                <h1></h1>
                <h1></h1>
                <h2>Store Name</h2>

                <div class="rating">
                  <input type="radio" name="rating" value="5" id="5"></input>
                  <label for="5">☆</label>
                  <input type="radio" name="rating" value="4" id="4"></input>
                  <label for="4">☆</label>
                  <input type="radio" name="rating" value="3" id="3"></input>
                  <label for="3">☆</label>
                  <input type="radio" name="rating" value="2" id="2"></input>
                  <label for="2">☆</label>
                  <input type="radio" name="rating" value="1" id="1"></input>
                  <label for="1">☆</label>
                </div>

                <p>
                  Street<br></br>
                  City<br></br>
                  State<br></br>
                  Zipcode<br></br>
                  Phone Number
                </p>

                <h3>Categories</h3>
                <li class="nav-item pill">
                  <a class="nav-link active" href="#pantry">
                    Pantry
                  </a>
                </li>
                <li class="nav-item pill">
                  <a class="nav-link" href="#dairyEggs">
                    Dairy &amp; Eggs
                  </a>
                </li>
                <li class="nav-item pill">
                  <a class="nav-link" href="#meatSeafood">
                    Meat &amp; Seafood
                  </a>
                </li>
                <li class="nav-item pill">
                  <a class="nav-link" href="#produce">
                    Produce
                  </a>
                </li>
              </ul>
            </nav>
            <div id="extra-space"></div>
          </div>
        </div>
      </div>
    );
  }
}
