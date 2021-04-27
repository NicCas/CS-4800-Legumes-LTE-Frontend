import React, { lazy } from "react";
import "./HandbasketPage.css";
import axios from "axios";
import basket from "../assets/handbasket.png";
import { Link } from "react-router-dom";
const HandbasketTable = lazy(() => import("./HandbasketTable"));

axios.defaults.withCredentials = true;

export default class HandbasketPage extends React.Component {
  render() {
    return (
      <div id="handbasket-page">
        <div id="handbasket-container">
          <div class="basket-wrapper">
            <img src={basket} class="basket-image"></img>
            <h1 class="basket-title">Your Handbasket</h1>
          </div>
          <HandbasketTable />
          <div id="nav-buttons">
            <Link to="/storehome">
              <button>Continue Shopping</button>
            </Link>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
