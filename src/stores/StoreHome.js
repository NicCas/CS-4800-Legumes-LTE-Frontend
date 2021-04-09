import React from "react";
import "./StoreHome.css";
import owner from "./owner_placeholder.png";

function StoreHome() {
  return (
    <div id="store-home">
      <div id="header">
        <h1>Stores</h1>
        Meet the owners and learn more about our wonderful selection of local
        stores!
      </div>
      <div class="list-group">
        <form action="/stores/detail" method="post">
          <button
            type="submit"
            class="list-group-item list-group-item-action"
            name="store_name"
          >
            <div class="row">
              <div class="column left">
                <t>
                  Store Name
                  <br />
                  <b>Rating: </b> #.#
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
                <t>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </t>
              </div>
            </div>

            <input type="hidden" name="store_id" />
          </button>
        </form>
        <div id="extra-space-small"></div>
      </div>
    </div>
  );
}

export default StoreHome;
