import React, { lazy } from "react";
import axios from "axios";
import "./Account.css";
import account from "../assets/owner_placeholder.png";

const CurrentOrder = lazy(() => import("./CurrentOrder"));

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
    transits: [],
    deliv_items: [],
    favs: [],
    handlers: [],
    handler: {},
    items: [],
    store: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://chickpeaapi.glitch.me/user/account-details`,
        /*`https://chickpeaapi.glitch.me/stores`,*/ { withCredentials: true }
      )
      .then((res) => {
        const data = res.data;
        var billing_addrs = [];
        var shipping_addrs = [];
        var order_nos = [];
        var delivered_items = [];
        var item_props = [];
        var in_transit = [];
        var delivery_handler = {};

        //console.log(data);
        this.setState({ customer: data.customer_info });
        for (var i = 0; i < data.addresses.length; i++) {
          if (data.addresses[i].Is_Billing == true)
            billing_addrs.push(data.addresses[i]);
          if (data.addresses[i].Is_Shipping == true)
            shipping_addrs.push(data.addresses[i]);
        }
        this.setState({ billings: billing_addrs[0] });
        this.setState({ shippings: shipping_addrs[0] });
        if(data.deliveries.length > 0){
          for (var i = 0; i < data.deliveries.length; i++) {
            if (data.deliveries[i].Delivered == true)
              order_nos.push(data.deliveries[i]);
            else in_transit.push(data.deliveries[i]);
          }
          in_transit.sort((a, b) => (b.Date > a.Date ? 1 : -1));
          this.setState({ delivs: order_nos, transporting: in_transit[0] });
        }

        //items that have been delivered
        /*for(var i = 0; i < data.deliveries.Purchased_Items.length; i++){
             delivered_items.push(data.deliveries.Purchased_Items);
             
          }
          this.setState({deliv_items: delivered_items[0]});*/

        //Favorites
        if(data.favorites){
          for (var i = 0; i < data.favorites.length; i++) {
            item_props.push(data.favorites[i]);
          }
          this.setState({ favs: item_props });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleLogout() {
    console.log("I am logging out");
    axios.get(`https://chickpeaapi.glitch.me/login/logout`, {
      withCredentials: true,
    });
  }

  render() {
    if(!this.state.transporting.Delivery_ID){
      return (
        <div id="account-page">
          <div id="account-header" class="account-wrapper">
            <div id="name-image">
              <img src={account} class="account-image"></img>
              <h3 class="account-title">Hello, {this.state.customer.Username}</h3>
            </div>
            <div id="logout-button">
              <a href="/home">
                <button
                  href="/home"
                  class="purple-button btn"
                  onClick={() => this.handleLogout()}
                >
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
                  <p>Username </p>
                  <p>Email </p>
                  <p>Billing Address </p>
                  <p>Shipping Address </p>
                </div>
                <div class="info-block">
                  <p> {this.state.customer.Username} </p>
                  <p> {this.state.customer.Email} </p>
                  {this.state.billings &&
                    <p>
                      {this.state.billings.Street}, {this.state.billings.City},{" "}
                      {this.state.billings.State}, {this.state.billings.Zip_Code}{" "}
                    </p>
                  }
                  {
                    !this.state.billings &&
                    <p>none on file</p>
                  }
                  {this.state.shippings &&
                    <p>
                      {this.state.shippings.Street}, {this.state.shippings.City},{" "}
                      {this.state.shippings.State}, {this.state.shippings.Zip_Code}
                    </p>
                  }
                  {
                    !this.state.shippings &&
                    <p>none on file</p>
                  }
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
  
                  {this.state.favs.map((favorites) => (
                    <tr>
                      <td>{favorites.Item_Name}</td>
                      <td> {favorites.Store_ID} </td>
                      <td>${favorites.Price.toFixed(2)}</td>
                    </tr>
                  ))}
                </table>
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
              {this.state.delivs.map((deliveries) => (
                <tr>
                  <td>{deliveries.Delivery_ID}</td>
                  <td> {deliveries.Date} </td>
                  <td>${deliveries.Total_Cost}</td>
                  <td>
                    {this.state.shippings.Street},{this.state.shippings.City},
                    {this.state.shippings.State},{this.state.shippings.Zip_Code}
                  </td>
                  <td>this.state.deliv_items</td>
                </tr>
              ))}
            </table>
          </div>
          <div id="extra-space-account"></div>
        </div>
      );
    }
    return (
      <div id="account-page">
        <div id="account-header" class="account-wrapper">
          <div id="name-image">
            <img src={account} class="account-image"></img>
            <h3 class="account-title">Hello, {this.state.customer.Username}</h3>
          </div>
          <div id="logout-button">
            <a href="/home">
              <button
                href="/home"
                class="purple-button btn"
                onClick={() => this.handleLogout()}
              >
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
                <p>Username </p>
                <p>Email </p>
                <p>Billing Address </p>
                <p>Shipping Address </p>
              </div>
              <div class="info-block">
                <p> {this.state.customer.Username} </p>
                <p> {this.state.customer.Email} </p>
                {this.state.billings &&
                  <p>
                    {this.state.billings.Street}, {this.state.billings.City},{" "}
                    {this.state.billings.State}, {this.state.billings.Zip_Code}{" "}
                  </p>
                }
                {
                  !this.state.billings &&
                  <p>none on file</p>
                }
                {this.state.shippings &&
                  <p>
                    {this.state.shippings.Street}, {this.state.shippings.City},{" "}
                    {this.state.shippings.State}, {this.state.shippings.Zip_Code}
                  </p>
                }
                {
                  !this.state.shippings &&
                  <p>none on file</p>
                }
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

                {this.state.favs.map((favorites) => (
                  <tr>
                    <td>{favorites.Item_Name}</td>
                    <td> {favorites.Store_ID} </td>
                    <td>${favorites.Price.toFixed(2)}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
            <div id="recent-order" class="account-grid-item">
            <CurrentOrder
              transporting={this.state.transporting}
              shippings={this.state.shippings}
            />
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
            {this.state.delivs.map((deliveries) => (
              <tr>
                <td>{deliveries.Delivery_ID}</td>
                <td> {deliveries.Date} </td>
                <td>${deliveries.Total_Cost}</td>
                <td>
                  {this.state.shippings.Street},{this.state.shippings.City},
                  {this.state.shippings.State},{this.state.shippings.Zip_Code}
                </td>
                <td>this.state.deliv_items</td>
              </tr>
            ))}
          </table>
        </div>
        <div id="extra-space-account"></div>
      </div>
    );
  }
}
