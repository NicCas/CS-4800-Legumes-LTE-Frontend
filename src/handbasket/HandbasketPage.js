import React from "react";
import "./HandbasketPage.css";
import axios from "axios";
import basket from "../assets/handbasket.png";
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;

export default class HandbasketPage extends React.Component {
  state = {
    handbasket: [],
    total: 0,
  };

  componentDidMount() {
    axios
      .get(`https://chickpeaapi.glitch.me/cart`)
      .then((res) => {
        const data = res.data;
        var running_total = 0;
        for (var item of data) {
          running_total +=
            parseFloat(item.Price.$numberDecimal) * item.Quantity;
        }
        this.setState({ handbasket: data, total: running_total });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="handbasket-page">
        <div id="handbasket-container">
          <div class="basket-wrapper">
            <img src={basket} class="basket-image"></img>
            <h1 class="basket-title">Your Handbasket</h1>
          </div>
          <table id="handbasket-table">
            <thead>
              <tr>
                <th id="product-column">Product</th>
                <th id="store-column">Store</th>
                <th id="price-column">Price</th>
                <th id="quantity-column">Quantity</th>
                <th id="subtotal-column">Subtotal</th>
              </tr>
            </thead>
            {this.state.handbasket.map((item) => (
              <tr>
                <td>
                  <div class="product-image">
                    <img
                      src={item.Image_URL}
                      width="150px"
                      height="150px"
                    ></img>
                  </div>
                  <div class="product-name">{item.Item_Name}</div>
                </td>
                <td>{item.Store_Name}</td>
                <td>${item.Price.$numberDecimal}</td>
                <td>{item.Quantity}</td>
                <td>${item.Price.$numberDecimal * item.Quantity}</td>
              </tr>
            ))}
          </table>
          <div id="total">
            <b>Total: ${this.state.total}</b>
          </div>
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
