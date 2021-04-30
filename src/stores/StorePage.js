import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import "./StorePage.css";
import item from "../assets/item_placeholder.png";
import axios from 'axios'

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

export default class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      store: {}
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let currentComponent = this;
    // axios request will go in here
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
    });
    // grabbing url parameter /:store_id
    //console.log(this.props.match.params);
  }

  render() {
    return (
      <div id="store-page">
        <div class="store-grid-container">
          {/* Container for the first two boxes; store info and the category buttons */}
          <div id="top-items">
            {/* Store Info box */}
            <div id="store-info" class="store-grid-item">
              <div id="backsplash-div"></div>
              <h2>{this.state.store.Store_Name}</h2>
  
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
                    {this.state.store.Address_Street}
                    <br></br>
                    {this.state.store.Address_City}
                    <br></br>
                    {this.state.store.Address_State}
                    <br></br>
                    {this.state.store.Address_Zipcode}
                    <br></br>
                    {this.state.store.Phone_Number}
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
                {Object.keys(this.state.items).map((category_name) => (
                  /*beginnings of dynamically populating the categories; you might need to access the item arrays using the following:
                      this.state.items[category_name]
                    or something similar to that  
                  */
                  <a class="cat" href={`#${category_name}`}>
                    <p>{category_name}</p>
                  </a>
              ))}
              </div>
            </div>
          </div>
  
          
          <div id="items-list">
            {/* Beginning of items box, this will be a loop per category*/}

            {Object.keys(this.state.items).map((category_name) => (
              <div>
               <a class="anchor" id={`${category_name}`}></a>
               <div class="items-grid-cont">
               <div class="inner-grid-cont">
                <h3>{category_name}</h3>
                {this.state.items[category_name].map((product) => (
                <div class="items-grid-item">
                <Card style={{ width: "10rem" }}>
                <Card.Img
                  variant="top"
                  id="item-icon"
                  src={product.Image_URL} 
                  width="100px"
                  height="100px"
                  alt="Placeholder Item Picture"
                />{/* Change item to an alt if database image does not exist */}

                  <Card.Body>
                    <Card.Title>{product.Item_Name}</Card.Title>
                    <Card.Text>${product.Price}</Card.Text>
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
                    <small className="text-muted">Stock: {product.Stock}</small>
                  </Card.Footer>
                </Card>
                </div>
                ))}
               </div>
                </div>
              </div>
               
              ))}

          </div>
        </div>
        <div id="extra-space-store"></div>
      </div>
    );
  }
}

