import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import "./StorePage.css";
import item from "../assets/item_placeholder.png";

{/* For dynamic implementation ItemCards code should be placed back into the main function, to simplify passing arguments.
  * it is seperated here for ease of testing */}
function ItemCards() {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img
        variant="top"
        id="item-icon"
        src={item} 
        alt="Placeholder Item Picture"
      />{/* Change item to an alt if database image does not exist */}

      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Text>$ Price</Card.Text>
{/*
        <InputGroup className="mb-3">
          <InputGroup.Append>
            <Button variant="outline-secondary">Buy</Button>
          </InputGroup.Append>
          <FormControl
            placeholder="Number of Items"
            aria-label="Number of Items"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
*/}
        <button class="btn">Buy</button>
        
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">Stock #</small>
      </Card.Footer>
    </Card>
  );
}

{/* The main funcion */}
function Store() {
  return (
    <div id="store-page">
      <div class="store-grid-container">
        {/* Container for the first two boxes; store info and the category buttons */}
        <div id="top-items">
          {/* Store Info box */}
          <div id="store-info" class="store-grid-item">
            <div id="backsplash-div"></div>
            <h2>state.store.Store_Name</h2>

            {/* Code for the star rating */}
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

          {/* Categories button box */}
          <div class="info-block store-grid-item" id="categories">
            <h3>Categories</h3>
            {/* This section should be a dynamic loop */}
            <div id="categories-grid">
              {/* href needs to be dynamically named, maybe the category title itself?*/}
              <a class="cat" href="#cat1">
                Category
              </a>
              <a class="cat" href="#cat2">
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
          {/* Beginning of items box, this will be a loop per category */}
          <a class="anchor" id="cat1"></a> {/* What the category button links to, anchor provides buffer from header, id is the same as the corresponding button */}
          <div class="items-grid-cont">
            <h3>Category</h3>
            <div class="inner-grid-cont">
              {/* This will be a loop per item */}
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

          {/* For dynamic data remove this section */}
          <a class="anchor" id="cat2"></a> 
          <div class="items-grid-cont" id="cat2">
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
