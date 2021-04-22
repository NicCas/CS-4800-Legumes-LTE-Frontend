import React from "react";
import "./StorePage.css";
import axios from "axios";
import backsplash from "../assets/backsplash_placeholder.png";
import { lazy } from "react";
//import item from "./item_placeholder.png";
import item from "../assets/item_placeholder.png";

export default class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      store: {},
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let currentComponent = this;
    // axios request will go in here
    axios("https://chickpeaapi.glitch.me/stores/detail", {
      method: "post",
      data: {
        store_id: currentComponent.props.match.params.store_id,
      },
    }).then(function (response) {
      const store_data = response.data.store;
      const item_list = response.data.items;
      currentComponent.setState({ items: item_list, store: store_data });
    });
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
                <h2>{this.state.store.Store_Name}</h2>

                <div class="rating">
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    id="5"
                    disabled="true"
                  ></input>
                  <label for="5">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    id="4"
                    checked=""
                    disabled="true"
                  ></input>
                  <label for="4">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    id="3"
                    checked=""
                    disabled="true"
                  ></input>
                  <label for="3">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    id="2"
                    checked=""
                    disabled="true"
                  ></input>
                  <label for="2">☆</label>
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    id="1"
                    checked="checked"
                    disabled="false"
                  ></input>
                  <label for="1">☆</label>
                </div>

                <p>
                  {this.state.store.Address_Street}
                  <br></br>
                  {this.state.store.Address_City}
                  <br></br>
                  {this.state.store.Address_State}
                  <br></br>
                  {this.state.store.Address_Zipcode}
                  <br></br>
                  {this.state.store.Phone_Number}
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
