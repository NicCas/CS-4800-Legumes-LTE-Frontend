import React from "react";
import "./Search.css";
import Card from "react-bootstrap/Card";
import item from "../assets/item_placeholder.png";
import search from "../assets/search.png";

import axios from "axios";
axios.defaults.withCredentials = true;

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

  

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      store: {},
      userSearch: '',
      redirect: null,
      error: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  // One potential method of sending info to middle ware Based on LogIns
  handleSearchQuery(event) {
    this.setState({
      userSearch: event.target.value
    });
  }

  handleSubmit(event){
    let currentComponent = this;
    var searchHit;
    axios("https://chickpeaapi.glitch.me/search/query", {
      method: "post",
      data: {
        userSearch : this.state.userSearch
      }
    })
    .then(function(response) {
      console.log(response.data);
      searchHit = response.data;
      currentComponent.setState( { redirect: "/search" } )
    });
    event.preventDefault();
  }

  // Another potential method of sending info to middle ware Based on StorePage
  componentDidMount() {
    let currentComponent = this;
    // axios request will go in here
    axios("https://chickpeaapi.glitch.me/search/query", {
      method: "post",
      data: {
        //searchQ: currentComponent.props.match.params.searchQ // In theory this gets the search query from the URL generated by clicking search, currently it breaks. See StorePage for working code refrence
      }
    }).then(function(response) {
      console.log(response);
      //const store_data = response.data.store;
      const item_list = response.data.items;
      currentComponent.setState({
        items: item_list,
        //store: store_data
        });
    });
    // grabbing url parameter /:store_id
    //console.log(this.props.match.params);
  }

  render (){
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
}
