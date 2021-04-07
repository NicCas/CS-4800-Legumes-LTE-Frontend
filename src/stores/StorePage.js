import React from "react";
import "./StorePage.css";

function StorePage() {
  return (
    <div id="store-page">
      <div>
        <img src="./assets/backsplash_placeholder.png" id="backsplash"></img>
      </div>

      <div class="container-fluid">
        <div class="row">
          <nav class="col-sm-3 col-4" id="myScrollspy">
            <ul class="nav nav-pills flex-column" id="test-pills">
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
        </div>
      </div>

      <div class="col-sm-9 col-8">
        <div id="pantry">
          <div
            id="multi-item-carousel"
            class="carousel slide carousel-multi-item"
            data-ride="carousel"
          >
            <div class="controls">
              <a
                class="btn-floating"
                href="#multi-item-carousel"
                data-slide="prev"
              >
                <i class="fas fa-chevron-left"></i>
              </a>
              <a
                class="btn-floating"
                href="#multi-item-carousel"
                data-slide="next"
              >
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>

            <ol class="carousel-indicators">
              <li
                data-target="#multi-item-carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#multi-item-carousel" data-slide-to="1"></li>
            </ol>

            <h1>Category name</h1>

            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <div class="col-md-3" style="float:left">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="./assets/item_placeholder.png"
                      alt="image title"
                    ></img>

                    <div class="card-body">
                      <h5 class="card-title">
                        <span class="item-name">Item</span>
                      </h5>
                      <p class="card-text">
                        $<span class="item-cost">0.00</span>
                      </p>
                    </div>

                    <a href="#!" class="btn">
                      Buy
                    </a>

                    <div class="card-footer">
                      <small class="text-muted">Stock #</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
