import React from "react";
import axios from "axios";
import "./StoreHome.css";
import owner from "../assets/owner_placeholder.png";
import { Link } from "react-router-dom";
//axios.defaults.withCredentials = true;

export default class StoreHome extends React.Component {
  state = {
    stores: [],
  };

  componentDidMount() {
    axios
      .get(`https://chickpeaapi.glitch.me/stores`)
      .then((res) => {
        const data = res.data;
        this.setState({ stores: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="store-home">
        <div id="header">
          <h1>Stores</h1>
          Meet the owners and learn more about our wonderful selection of local
          stores!
        </div>
        <div class="list-group">
          {this.state.stores.map((store) => (
            <Link to={"/storepage/" + store.Store_ID}>
              <button
                type="submit"
                class="list-group-item list-group-item-action"
                name="store_name"
              >
                <div class="row">
                  <div class="column left">
                    <t>
                      {store.Store_Name}
                      <br />
                      <b>Rating: </b> {store.Rating}
                    </t>
                  </div>

                  <div class="column middle">
                    <img
                      id="owner-icon"
                      src={owner}
                      alt="Placeholder Owner Picture"
                      //style="width:60px;height:60px;"
                    ></img>
                  </div>
                  <div class="column right">
                    <t>{store.Description}</t>
                  </div>
                </div>

                <input type="hidden" name="store_id" />
              </button>
            </Link>
          ))}
        </div>
        <div id="extra-space-store-home"></div>
      </div>
    );
  }
}
