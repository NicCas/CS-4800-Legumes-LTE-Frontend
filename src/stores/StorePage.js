import React from "react";
import Card from "react-bootstrap/Card";
import "./StorePage.css";
import item from "../assets/item_placeholder.png";

function ItemCards() {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img
        variant="top"
        id="item-icon"
        src={item}
        alt="Placeholder Item Picture"
      />

      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Text>$ Price</Card.Text>
        <button class="btn">Buy</button>
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">Stock #</small>
      </Card.Footer>
    </Card>
  );
}

function Store() {
  return (
    <div id="store-page">
      <div class="store-grid-container">
        <div id="top-items">
          <div id="store-info" class="store-grid-item">
            <div id="backsplash-div"></div>
            <h2>state.store.Store_Name</h2>

            <div class="info-block" id="info-title">
              <div id="rating-wrapper">
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
                    checked="checked"
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
                    checked=""
                    disabled="true"
                  ></input>
                  <label for="1">☆</label>
                </div>
              </div>
              <div id="store-info-text">
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
            </div>
          </div>

          <div class="info-block store-grid-item" id="categories">
            <h3>Categories</h3>
            <div id="categories-grid">
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
              <a class="cat" href="#">
                Category
              </a>
            </div>
          </div>
        </div>

        <div id="items-list">
          <div class="items-grid-cont">
            <h3>Category</h3>
            <div class="inner-grid-cont">
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
            </div>
          </div>

          <div class="items-grid-cont">
            <h3>Category</h3>
            <div class="inner-grid-cont">
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
              <div class="items-grid-item">
                <ItemCards></ItemCards>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="extra-space-store"></div>
    </div>
  );
}

export default Store;
