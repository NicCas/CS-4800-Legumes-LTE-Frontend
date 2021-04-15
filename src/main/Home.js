import React from "react";
import "./Home.css";
import axios from "axios";

//axios for testing purposes, good luck luis!
axios
  .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    timeout: 5000,
  })
  .then((res) => showOutput(res))
  .catch((err) => console.error(err));

function Home() {
  return (
    <div id="home-page">
      <h1>Chickpea</h1>
      <p>Welcome to Chickpea!</p>
      <p>Our site is currently under construction, please check back later!</p>

      <div id="testimonials"></div>
      <div id="extra-space"></div>
    </div>
  );
}

export default Home;
