import React from "react";
import Banner from "../Banner/Banner";
import Services from "./Services/Services";
import "../../../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div>
        <h2 className="App mt-4">
          <Link to="/services" className="btn btn-error">
            See All
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
