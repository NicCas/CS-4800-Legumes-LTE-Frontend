import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./StorePage.css";
import backsplash from "../assets/backsplash_placeholder.png";
import item from "../assets/item_placeholder.png";

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
        <a class="nav-link active" href="#pantry">
          Pantry
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#dairyEggs">
          Dairy &amp; Eggs
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#meatSeafood">
          Meat &amp; Seafood
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#produce">
          Produce
        </a>
      </li>
    </ul>
          
  )
}

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

function StorePage() {
  return (
    <div id="store-page">
      
      
      <div>
        <img src={backsplash} id="backsplash"></img>
      </div>
    

      <div class="container-fluid">
        <div class="row">
          <nav class="col-sm-3 col-4" id="myScrollspy">
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
        <a class="nav-link active" href="#pantry">
          Pantry
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#dairyEggs">
          Dairy &amp; Eggs
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#meatSeafood">
          Meat &amp; Seafood
        </a>
      </li>
      <li class="nav-item pill">
        <a class="nav-link" href="#produce">
          Produce
        </a>
      </li>
    </ul>
          </nav>
          <div class="col">
            <div class="row">
              Category title
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
    </div>
  );
}

export default StorePage;
