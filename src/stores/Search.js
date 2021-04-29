import React from "react";
import "./Search.css";
import Card from "react-bootstrap/Card";
import item from "../assets/item_placeholder.png";
import search from "../assets/search.png";

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

function Search() {
  return (
    <div id="search-page">
      <div id="search-header">
        <img id="search-img" src={search}></img>
        <h2 id="search-title">Search Results For: </h2>
      </div>
      <div id="search-items-list">
        <a class="anchor-search" id="store1"></a>
        <div class="search-grid-outer">
          <h3>Store</h3>
          <div class="search-grid-inner">
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
          </div>
        </div>

        <a class="anchor-search" id="store1"></a>
        <div class="search-grid-outer">
          <h3>Store</h3>
          <div class="search-grid-inner">
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
            <div class="items-grid-search">
              <ItemCards></ItemCards>
            </div>
          </div>
        </div>
      </div>
      <div id="extra-space-search"></div>
    </div>
  );
}

export default Search;
