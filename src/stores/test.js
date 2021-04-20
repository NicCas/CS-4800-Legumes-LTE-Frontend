import React from "react";
// Libraries for react/boostrap grids https://react-bootstrap.github.io/layout/grid/
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Libraries for react/boostrap cards and card decks https://react-bootstrap.netlify.app/components/cards/#cards
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import "./StorePage.css";
import backsplash from "../assets/backsplash_placeholder.png";
import item from "../assets/item_placeholder.png";

// This is the function for building the store info bar including name, rating, address, and nav pills
function InfoBar() {
  return(
    <ul class="nav nav-pills flex-column" id="test-pills">
      <h1></h1>
      <h1></h1>
      <h2>Store Name</h2>

      <div class="rating">
        <input type="radio" name="rating" value="5" id="5"></input>
        <label for="5">☆</label>
        <input type="radio" name="rating" value="4" id="4"></input>
        <label for="4">☆</label>
        <input type="radio" name="rating" value="3" id="3"></input>
        <label for="3">☆</label>
        <input type="radio" name="rating" value="2" id="2"></input>
        <label for="2">☆</label>
        <input type="radio" name="rating" value="1" id="1"></input>
        <label for="1">☆</label>
      </div>

      <p>
        Street<br></br>
        City<br></br>
        State<br></br>
        Zipcode<br></br>
        Phone Number
      </p>

      <h3>Categories</h3>
      <li class="nav-item pill">
        <a class="nav-link active" href="#Category1">
          Category 1
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#Category2">
          Category 2
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#Category3">
          Category 3
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#Category4">
          Category 4
        </a>
      </li>
    </ul>   
  )
}

// This function builds each individual item card including image, name, price, buy button, and stock #
function ItemCards() {
  return(
    <Card style={{ width: '18rem' }}>   
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

// The main function, this conatins the grid and calls the other functions
function StorePage() {
  return (
    <div id="store-page">

      <Container md={{ fluid: true }} lg={{ fluid: true }}> {/* in theory this shoul get everything to stretch to the edges of the window for medium and large screens*/}
        <Row>
          <Col xs={1}>
            <InfoBar />
          </Col>

          <Col>
              <h1>Category Name</h1> 
          </Col>
          <Col xs={6}>
            
             
            <Row>
              <CardDeck>
                <ItemCards />
                <ItemCards />
                <ItemCards />
                <ItemCards />
                <ItemCards />
              </CardDeck>
              </Row>
           
          </Col>
        </Row>
      </Container>

      {/* This is older code with the previous html/bootsrap grid in tact*/}
      {/*
      <div class="container-fluid">
        <div class="row">
            <nav class="col-sm-3 col-4" id="myScrollspy">
                <InfoBar />
            </nav>
            <div class="col">

                <div class ="row">
                <CardDeck>
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                </CardDeck>
                </div>

                <div class ="row">
                <CardDeck>
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                    <ItemCards />
                </CardDeck>
                </div>

            </div>
            </div>
        </div>
      */}

    </div>
  );
}

export default StorePage;