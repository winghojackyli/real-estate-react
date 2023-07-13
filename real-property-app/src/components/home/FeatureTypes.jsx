import React from "react";

const FeatureTypes = () => {
  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-dark mb-4">Featured Property Types</h2>
        <div className="row g-5">
          <div className="col">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h2">
                  <i className="fa-solid fa-city" />
                </div>
                <h3 className="card-title">Apartment</h3>
                <p className="lead">100 listings</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h2">
                  <i className="fa-regular fa-building" />
                </div>
                <h3 className="card-title">Condo</h3>
                <p className="lead">70 listings</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h2">
                  <i className="fa-solid fa-house" />
                </div>
                <h3 className="card-title">House</h3>
                <p className="lead">120 listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTypes;
