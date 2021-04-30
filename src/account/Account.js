import React from "react";
import axios from "axios";
import "./Account.css";
import account from "../assets/owner_placeholder.png";
import ProgressBar from "react-bootstrap/ProgressBar";

axios.defaults.withCredentials = true;

export default class Account extends React.Component {
  state = {
    customer: {},
    addresses: [], 
    billings: [], 
    shippings: [], 
    deliveries: [], 
    delivs: [], 
    transporting: [], 
    transits: []
  };

  componentDidMount() {
    axios
      .get(`https://chickpeaapi.glitch.me/user/account-details`, { withCredentials: true })
      .then((res) => {
        const data = res.data;
        var billing_addrs = [];
        var shipping_addrs = [];
        var shipped_order_nos = [];
        var delivering_order_nos = [];
        console.log(data);
        this.setState({ customer: data.customer_info });
        for(var i = 0; i < data.addresses.length; i++){
          if(data.addresses[i].Is_Billing == true)
            billing_addrs.push(data.addresses[i]);
          if(data.addresses[i].Is_Shipping == true)
            shipping_addrs.push(data.addresses[i]);
        }
        this.setState({billings: billing_addrs[0]});
        this.setState({shippings: shipping_addrs[0]});
        for(var i = 0; i < data.deliveries.length; i++){
          if(deliveries[i].Delivered == true)
            shipped_order_nos.push(data.deliveries[i]);
          if(deliveries[i].Delivered == false)
            delivering_order_nos.push(data.deliveries[i]);
        }
        this.setState({ delivs: shipped_order_nos[0]});
        this.setState({ transporting: delivering_order_nos[0]});
            
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleLogout(){
    console.log("I am logging out");
    axios.get(`https://chickpeaapi.glitch.me/login/logout`, {withCredentials: true});
  }

  render() {
    return (
      <div id="account-page">
        <div id="account-header" class="account-wrapper">
          <div id="name-image">
            <img src={account} class="account-image"></img>
            <h3 class="account-title">Hello, {this.state.customer.Username}</h3>
          </div>
          <div id="logout-button">
            <a href="/home">
              <button href="/home" class="purple-button btn" onClick={() => this.handleLogout()}>
                Logout
              </button>
            </a>
          </div>
        </div>
        <div class="account-grid-container">
          <div id="left-column">
            <div id="profile-info" class="account-grid-item">
              <h3>Account Information</h3>
              <div class="info-block" id="info-title">
                <p>Username: </p>
                <p>Email </p>
                <p>Billing Address </p>
                <p>Shipping Address </p>
              </div>
              <div class="info-block">
                <div>{this.state.customer.Username}</div>
                <p> {this.state.customer.Username} </p>
                <p>User Email</p>
                <p>User BillingAddress</p>
                <p>User ShippingAddress</p>
              </div>
            </div>
            <div id="favorites" class="account-grid-item">
              <h3>Favorites</h3>
              <table>
                <tr>
                  <th class="item-column">Item</th>
                  <th class="store-column">Store</th>
                  <th class="price-column">Price</th>
                </tr>
                <tr>
                  <td>Item</td>
                  <td>Store</td>
                  <td>Price</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="recent-order" class="account-grid-item">
            <h3>Current Order</h3>
            <div id="order-info">
              <p>Order Number: #000000</p>
              <ProgressBar animated variant="warning" now={20} />
              <p>Order Staus: Status</p>
              <p>Order Time: 00:00</p>
              <p>Handler: Handler Name</p>
              <p>Delivery Address: User Address</p>
            </div>
            <table>
              <tr>
                <th class="product-column">Product</th>
                <th class="store-column">Store</th>
                <th class="price-column">Price</th>
                <th class="quantity-column">Quantity</th>
                <th class="subtotal-column">Subtotal</th>
              </tr>
              <tr>
                <td>Product</td>
                <td>Store</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </table>
            <div id="price-info">
              <p>Tax: $0.00</p>
              <p>Delivery Fee: $0.00</p>
              <p>Tip: $0.00</p>
              <br></br>
              <p>Total Price: $0.00</p>
            </div>
          </div>
        </div>
        <div id="order-history" class="account-grid-item">
          <h3>Order History</h3>
          <table>
            <tr>
              <th>Order Number</th>
              <th>Date</th>
              <th>Total Cost</th>
              <th>Delivery Address</th>
              <th>Items</th>
            </tr>
            <tr>
              <td>Order Number</td>
              <td>Date</td>
              <td>Total Cost</td>
              <td>Deliver Address</td>
              <td>Items</td>
            </tr>
          </table>
        </div>
        <div id="extra-space-account"></div>
      </div>
    );
  }
}
