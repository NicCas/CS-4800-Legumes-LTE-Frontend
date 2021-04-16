import React from "react";
import "./Home.css";
import TestimonialCard from "material-testimonial-card";
import store1 from "../assets/store_photos/store1.png";
import store2 from "../assets/store_photos/store2.png";
import store3 from "../assets/store_photos/store3.png";
import store4 from "../assets/store_photos/store4.png";
import store5 from "../assets/store_photos/store5.png";
import store6 from "../assets/store_photos/store6.png";
import store7 from "../assets/store_photos/store7.png";
import store8 from "../assets/store_photos/store8.png";
import store9 from "../assets/store_photos/store9.png";
import store10 from "../assets/store_photos/store10.png";
import avatar from "../assets/profile.png";
import basket from "../assets/handbasket.png";

function Home() {
  return (
    <div id="home-page">
      <div id="photo-carousel">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 photo"
                src={store1}
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store2}
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store3}
                alt="Third slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store4}
                alt="Fourth slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store5}
                alt="Firth slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store6}
                alt="Sixth slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store7}
                alt="Seventh slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store8}
                alt="Eighth slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store9}
                alt="Ninth slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 photo"
                src={store10}
                alt="Tenth slide"
              ></img>
            </div>
          </div>

          <div id="page-header">
            <b>Chickpea</b>
            <p>Simple. Local. Groceries.</p>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="info">
        <h3>Welcome</h3>
        <p>
          Welcome to Chickpea - an online grocery order and delivery service. We
          pride ourselves on working with locally owned small businesses to
          allow them to sell their items online and compete with larger, name
          brand grocery stores. We are honored to serve the New Spork area in
          helping our community get the quality groceries they deserve with the
          same level of convenience as our competitors. Please enjoy our newly
          launched site, and enjoy your groceries!
        </p>
      </div>

      <div id="services">
        <div class="info">
          <h3>Users</h3>
          <p>
            Chickpea supports two main user categories: Customer and Handler. As
            a Customer, the user can order groceries from any of our
            participating stores and have them delivered straight to their
            doorstep. As a Handler, the user can shop for Chickpea Customers and
            deliver their items for compensation. Various features for each type
            of user are detailed below.
          </p>
        </div>
        <div id="grid-container-home">
          <div class="info grid-item-home">
            <h3>Customer</h3>
            <ul>
              <li>Purchase from multiple stores in one order</li>
              <li>Add favorite items to be purchased again</li>
              <li>Receive same day deliveries</li>
              <li>Set replacement suggestions for any store</li>
            </ul>
          </div>
          <div class="info grid-item-home">
            <h3>Handler</h3>
            <ul>
              <li>Provide your own available hours</li>
              <li>No delivery quota requirements</li>
              <li>Receive direct deposit compensation</li>
              <li>Set your own delivery radius</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="testimonial">
        <div class="info">
          <h3>Testimonials</h3>
          <p>Real reviews from real customers.</p>
        </div>

        <div id="grid-container-test">
          <div class="grid-item-test">
            <TestimonialCard
              name={"Erin B."}
              image={avatar}
              content={
                "Using Chickpea was such an easy, hassle free experience. I was able to get fresh groceries delivered to my doorstep in less than two hours! I recommend this to anyone who wants a fast and easy grocery experience."
              }
              project={"Sweet Pea City, New Spork"}
              className="testimonial"
            />
          </div>

          <div class="grid-item-test">
            <TestimonialCard
              name={"Victoria G."}
              image={avatar}
              content={
                "Delivering groceries with Chickpea was a breeze. I could pick which areas I was comfortable delivering to and choose my own hours. The payment and benefits make Chickpea Delivery the perfect job for a busy student!"
              }
              project={"Bean Borough, New Spork"}
              className="testimonial"
            />
          </div>

          <div class="grid-item-test">
            <TestimonialCard
              name={"Jess F."}
              image={avatar}
              content={
                "I showed my grandmother how to use Chickpea and she picked it up right away. The site is so easy to use, that she is able to create an entire order on her own now without my help."
              }
              project={"Mung Meadows, New Spork"}
              className="testimonial"
            />
          </div>
        </div>
      </div>

      <div id="about" class="info">
        <h3>The Company Behind Chickpea</h3>
        <p>
          Chickpea is the main project of the Legumes LTE. corporation. Please
          visit our company's main website{" "}
          <a
            href="https://legumeslte.neocities.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          for more information.
        </p>
        <br></br>

        <h3>Disclaimer</h3>
        <p>
          Chickpea in its entirety is a fictional project for CS 4800: Software
          Engineering Spring 2021 semester. All products, stores, owners, and
          customers either are products of the authors' imaginations or are used
          fictitiously. Any resemblance to actual products or stores or persons,
          living or dead, is entirely coincidental.
        </p>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
