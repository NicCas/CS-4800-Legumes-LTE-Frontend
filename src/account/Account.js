import React from "react";
import "./Account.css";
import account from "../assets/owner_placeholder.png";
import ProgressBar from "react-bootstrap/ProgressBar";

function Account() {
  return (
    <div id="account-page">
      <div id="account-header" class="account-wrapper">
        <img src={account} class="account-image"></img>
        <h3 class="account-title">Hello First Last!</h3>
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
              <p>User Username</p>
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

export default Account;