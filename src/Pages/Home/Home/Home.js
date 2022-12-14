import React from "react";
import Banner from "../Banner/Banner";

import "../../../App.css";
import { Link } from "react-router-dom";
import ThreeServices from "./Services/ThreeServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ThreeServices></ThreeServices>
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
