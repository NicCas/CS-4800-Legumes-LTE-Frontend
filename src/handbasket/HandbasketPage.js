import React from "react";
import "./HandbasketPage.css";
import basket from "../assets/handbasket.png";
import axios from "axios";

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
          running_total += parseFloat(item.Price.$numberDecimal);
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
          <div id="basket-wrapper">
            <img src={basket} id="basket-image"></img>
            <h1 id="basket-title">Your Handbasket</h1>
          </div>
          <table id="handbasket-table">
            <tr>
              <th id="product-column">Product</th>
              <th id="store-column">Store</th>
              <th id="price-column">Price</th>
              <th id="quantity-column">Quantity</th>
              <th id="subtotal-column">Subtotal</th>
            </tr>
            {this.state.handbasket.map((item) => (
              <tr>
                <td>
                  <span class="product-image">
                    <img
                      src={item.Image_URL}
                      width="150px"
                      height="150px"
                    ></img>
                  </span>
                  <span class="product-name">{item.Item_Name}</span>
                </td>
                <td>{item.Store_Name}</td>
                <td>${item.Price.$numberDecimal}</td>
                <td>1</td>
                <td>${item.Price.$numberDecimal}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}></td>
              <td>
                <b>Total: ${this.state.total}</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
