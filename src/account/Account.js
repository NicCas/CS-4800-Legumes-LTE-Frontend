import React, { lazy } from "react";
import axios from "axios";
import "./Account.css";
import account from "../assets/owner_placeholder.png";

const CurrentOrder = lazy(() => import("./CurrentOrder"));

axios.defaults.withCredentials = true;

var timeReceived = 10000; //new Date('2021-04-29T03:24:00')

// Set the time of the active delivery for calculating the progress bar
// This should only be called once when the page is rendered
// This function may be modified to include travering the order array to find the active order
function setTimeReceived(activeDeliveryInfo) {
  timeReceived = activeDeliveryInfo.Date;
}

// Calculate the time percentage for the progress bar
function expectedDeliveryPercentage() {
  // Get the current time
  var today = new Date();
  var currentTime =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() / 60;
  console.log(currentTime);
  //const currentTime = Date.now();
  //console.log(currentTime.toString());

  // Calculate the number of minutes passed since the order was made
  // Just subtracting returns the time in milliseconds, so the floor of milliseconds/60,000 converts to minutes
  // For purposes of easy simming the dividing number can be changed to 1,000
  const timeElapsed = Math.floor((timeReceived - currentTime) / 60000);
  // Calculate the percentage of an hour that has ellapsed, rounded for nicer numbers
  const deliveryPercentage = Math.ceil((timeElapsed / 60) * 100);

  return deliveryPercentage;
}

function orderStatus(deliveryPercentage) {
  var status;
  if (deliveryPercentage < 10) {
    status = "Recieving your order";
  } else if (deliveryPercentage < 50) {
    status = "Gathering items";
  } else if (deliveryPercentage < 60) {
    status = "Handler is on their way to the store(s)";
  } else if (deliveryPercentage < 100) {
    status = "Delivery is on its way";
  } else {
    status = "Delivered!";
  }
  return status;
}

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
<<<<<<< HEAD
    axios
      .get(
        `https://chickpeaapi.glitch.me/user/account-details`,
        /*`https://chickpeaapi.glitch.me/stores`,*/ { withCredentials: true }
      )
=======

    axios.get(`https://chickpeaapi.glitch.me/user/account-details`, /*`https://chickpeaapi.glitch.me/stores`,*/ { withCredentials: true })
>>>>>>> 89a991493ea8ba8da7a7bbb8d6962ed6778148dc
      .then((res) => {
        const data = res.data;
        const favorite = res.data.favorites.Favorite_Items;
        var billing_addrs = [];
        var shipping_addrs = [];
        var order_nos = [];
        var delivered_items = [];
        var item_props = [];
        var in_transit = [];
        var delivery_handler = {};
        var deliveryPrcnt = expectedDeliveryPercentage();

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
        for (var i = 0; i < data.deliveries.length; i++) {
          if (data.deliveries[i].Delivered == true)
            order_nos.push(data.deliveries[i]);
          else in_transit.push(data.deliveries[i]);
        }
        in_transit.sort((a, b) => (b.Date > a.Date ? 1 : -1));
        this.setState({ delivs: order_nos, transporting: in_transit[0] });

        //items that have been delivered
        /*for(var i = 0; i < data.deliveries.Purchased_Items.length; i++){
             delivered_items.push(data.deliveries.Purchased_Items);
             
          }
          this.setState({deliv_items: delivered_items[0]});*/

        //Favorites
        for (var i = 0; i < data.favorites.length; i++) {
          item_props.push(data.favorites[i]);
        }
        this.setState({ favs: item_props });
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
                <p>
                  {this.state.billings.Street}, {this.state.billings.City},{" "}
                  {this.state.billings.State}, {this.state.billings.Zip_Code}{" "}
                </p>
                <p>
                  {this.state.shippings.Street}, {this.state.shippings.City},{" "}
                  {this.state.shippings.State}, {this.state.shippings.Zip_Code}
                </p>
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
<<<<<<< HEAD
            <h3>Current Order</h3>
            <div id="order-info">
              <p>Order Number: #{this.state.transporting.Delivery_ID}</p>
              <ProgressBar
                animated
                variant="warning"
                now={expectedDeliveryPercentage()}
                label="test"
              />
              <p>Order Staus: {status}</p>
              <p>Order Time: {this.state.transporting.Date}</p>
              <p>Handler: {this.state.handler.Handler_Name} </p>
              <p>
                Delivery Address: {this.state.shippings.Street},{" "}
                {this.state.shippings.City}, {this.state.shippings.State},{" "}
                {this.state.shippings.Zip_Code}
              </p>
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
              <p>
                Tax: ${(this.state.transporting.Total_Cost * 0.0825).toFixed(2)}{" "}
              </p>
              <p>Delivery Fee: $2.00 </p>
              <p>Tip: $2.50 </p>
              <br></br>
              <p>
                Total Price: $
                {(
                  this.state.transporting.Total_Cost +
                  this.state.transporting.Total_Cost * 0.0825 +
                  4.5
                ).toFixed(2)}{" "}
              </p>
            </div>
=======
          <CurrentOrder
            transporting = {this.state.transporting}
            shippings = {this.state.shippings} 
          />
>>>>>>> 89a991493ea8ba8da7a7bbb8d6962ed6778148dc
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
