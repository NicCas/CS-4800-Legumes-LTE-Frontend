import React from "react";
import axios from "axios";
import "./Account.css";
import account from "../assets/owner_placeholder.png";
import ProgressBar from "react-bootstrap/ProgressBar";

axios.defaults.withCredentials = true;

export default class Account extends React.Component {
  state = {
    customer: {},
    addresses: [], billings: [], shippings: [], deliveries: [], delivs: [], transporting: [], transits: [], deliv_items: [], favs: [],
    handlers: [], handler: {},
    items: [], store: []
  };

  componentDidMount() {

    axios.get(`https://chickpeaapi.glitch.me/handler`)
    .then((res) => {
      const data = res.data;
      this.setState({handlers: data});
    }) 
    .catch(function (error) {
      console.log(error);
    });
    
   /* let currentComponent = this;
    axios("https://chickpeaapi.glitch.me/stores/detail", {
      method: "post",
      data: {
        store_id: currentComponent.props.match.params.store_id
      }
    }).then(function(response) {
      console.log(response);
      const store_data = response.data.store;
      const item_list = response.data.items;
      currentComponent.setState({
        items: item_list,
        store: store_data
        });
    });*/
    axios
      .get(`https://chickpeaapi.glitch.me/user/account-details`, /*`https://chickpeaapi.glitch.me/stores`,*/ { withCredentials: true })
      .then((res) => {
        const data = res.data;
        const favorite = res.data.favorites.Favorite_Items;
        var billing_addrs = [];
        var shipping_addrs = [];
        var order_nos = [];
        var delivered_items = [];
        var item_props = [];
        var in_transit = [];
        var delivery_handler = {}
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
            if(data.deliveries[i].Delivered == true)  
              order_nos.push(data.deliveries[i]);
            else
              in_transit.push(data.deliveries[i])
           }
           in_transit.sort((a, b) => b.Date > a.Date ? 1: -1);
          this.setState({ delivs: order_nos, transporting: in_transit[0]});
          for(var i = 0; i < data.handlers.length; i++){
            if(data.handlers[i].Handler_ID == transporting.Handler_ID)
              delivery_handler = handlers[i];
          }
          this.setState({handler: delivery_handler});
          //items that have been delivered
          /*for(var i = 0; i < data.deliveries.Purchased_Items.length; i++){
             delivered_items.push(data.deliveries.Purchased_Items);
             
          }
          this.setState({deliv_items: delivered_items[0]});

          //Favorites
          for(var i = 0; i < data.favorites.length; i++){
            for(var j = 0; j < data.favorites.Favorite_Items.length; j++){
              item_props.push(data.favorites[i].Favorite_Items[j]);
            }
            
          }
          this.setState({favs: item_props[0]});
          for(var a_handler in Handlers){
              if(a_handler.Handler_ID == transporting.Handler_ID)
                delivery_handler = a_handler.Handler_Name;
          }
          this.setState({handler: delivery_handler});  */
          this.setState({favs: favorite});
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
                
                <p> {this.state.customer.Username} </p>
                <p> {this.state.customer.Email} </p>
                <p>{this.state.billings.Street}, {this.state.billings.City}, {this.state.billings.State}, {this.state.billings.Zip_Code} </p>
                <p>{this.state.shippings.Street}, {this.state.shippings.City}, {this.state.shippings.State}, {this.state.shippings.Zip_Code}</p>
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
                  <td> {this.state.favs} </td>
                  <td>Store</td>
                  <td>Price</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="recent-order" class="account-grid-item">
            <h3>Current Order</h3>
            <div id="order-info">
              <p>Order Number: #{this.state.transporting.Delivery_ID}</p>
              <ProgressBar animated variant="warning" now={20} />
              <p>Order Staus: Status</p>
              <p>Order Time: {this.state.transporting.Date}</p>
              <p>Handler: {this.state.handler.Handler_Name} </p>
              <p>Delivery Address: {this.state.shippings.Street}, {this.state.shippings.City}, {this.state.shippings.State}, {this.state.shippings.Zip_Code}</p>
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
              <p>Tax: ${(this.state.transporting.Total_Cost * .0825).toFixed(2)} </p>
              <p>Delivery Fee: $2.00 </p>
              <p>Tip: $2.50 </p>
              <br></br>
              <p>Total Price: ${(this.state.transporting.Total_Cost + (this.state.transporting.Total_Cost * .0825) + 4.50).toFixed(2)} </p>
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
                  <td> {this.state.delivs.Date} </td>
                  <td>{this.state.delivs.Total_Cost}</td>
                  <td>{this.state.shippings.Street},
                      {this.state.shippings.City}, 
                      {this.state.shippings.State},
                      {this.state.shippings.Zip_Code}</td>
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
