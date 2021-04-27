import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./StorePage.css";
import backsplash from "../assets/backsplash_placeholder.png";
import item from "../assets/item_placeholder.png";

function ItemCards() {
  return(
    <Card style={{ width: '10rem' }}>   
      <Card.Img 
        variant="top" 
        id="item-icon" 
        src={item} 
        alt="Placeholder Item Picture"        
      />

      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Text>
          $ Price
        </Card.Text>
        <button>Buy</button>
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">Stock #</small>
      </Card.Footer>    
    </Card>
  )
}


function Store() {
  return (
    <div id="store-page">

      <div id="store-header" class="store-wrapper">
        <h3 class="store-title">Shop Local!</h3>
      </div>

      <div class="store-grid-container">
        <div id="left-column">
          <div id="store-info" class="store-grid-item">
            <img src={backsplash} id="backsplash"></img>

            <div class="info-block" id="info-title">
            <h2>state.store.Store_Name</h2>

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
              state.store.Address_Street
              <br></br>
              state.store.Address_City
              <br></br>
              state.store.Address_State
              <br></br>
              state.store.Address_Zipcode
              <br></br>
              state.store.Phone_Number
            </p>
            </div>
            <div class="info-block">
              <h3>Item Categories</h3>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
            </div>
          </div>
          
        </div>

        <div id="recent-order" class="store-grid-item">
          <h3>Category</h3>
          <table>
            <tr>
              <CardDeck>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
              </CardDeck>
            </tr>
          </table>

          <h3>Category</h3>
          <table>
            <tr>
              <CardDeck>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
                <td><ItemCards /></td>
              </CardDeck>
            </tr>
          </table>
          
        </div>
      </div>
      <div id="extra-space-store"></div>
    </div>
  );
}

export default Store;