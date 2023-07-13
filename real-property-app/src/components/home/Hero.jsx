import React from "react";
import homeImage from "../../images/home-page.svg";

function Hero({ color }) {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Find your <span className="text-warning">Dream Home</span>
            </h1>
            <p className="lead">
              Thousands of houses, apartments and condos for rent in Metro
              Vancouver. You will always find the one you love!
            </p>
          </div>
          <img src={homeImage} alt="" className="w-50" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
