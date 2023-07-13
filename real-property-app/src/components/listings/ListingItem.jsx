import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ListingItem.css";

const ListingItem = ({
  images,
  bath,
  bed,
  city,
  price,
  floorArea,
  owner: { email },
  _id,
}) => {
  return (
    <div className="card mb-5 me-3 p-1 listing-card text-center">
      <Carousel>
        <Carousel.Item className="listing-img">
          <img className="d-block w-100 h-100" src={images[0]} alt="exterior" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 listing-img"
            src={images[1]}
            alt="interior"
          />
        </Carousel.Item>
      </Carousel>
      <div className="card-body p-2">
        <h5 className="card-title">${price}</h5>
        <p className="card-text">{city}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {bed} bed 。 {bath} bath
        </li>
        <li className="list-group-item">{floorArea} sqft</li>
        <li className="list-group-item">Contact: {email}</li>
      </ul>
    </div>
  );
};

export default ListingItem;
