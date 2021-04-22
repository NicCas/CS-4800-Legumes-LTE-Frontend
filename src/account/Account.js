import React from "react";
import "./Account.css";
import account from "../assets/owner_placeholder.png";

function Account() {
  return (
    <div id="account-page">
      <div id="account-header" class="account-wrapper">
        <img src={account} class="account-image"></img>
        <h3 class="account-title">Account</h3>
      </div>
      <div id="profile-info" class="account-grid-container">
        <div class="account-grid-item">Account Information</div>
        <div class="account-grid-item">Name: </div>
        <div class="account-grid-item">Username: </div>
        <div class="account-grid-item">Email: </div>
        <div class="account-grid-item">Profile Info: </div>
      </div>
      <div id="orders">Favorites (Table)</div>
      <div id="orders">Most Recent Order (Display w progress bar)</div>
      <div id="orders">Order History (Table)</div>
    </div>
  );
}

export default Account;
