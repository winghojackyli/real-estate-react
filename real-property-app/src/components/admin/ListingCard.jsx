import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaTrash } from "react-icons/fa";
import deleteAxios from "../../helper/deleteAxios";
import UpdateListing from "./UpdateListing";

const ListingCard = (props) => {
  const deleteListing = () => {
    deleteAxios(`/api/listing/${_id}`)
      .then(() => {
        window.alert("Listing Deleted");
        notifyUpdate();
      })
      .catch((err) => console.log(err));
  };

  const {
    images,
    bath,
    bed,
    city,
    price,
    floorArea,
    owner,
    _id,
    notifyUpdate,
    users,
  } = props;
  const email = owner.email;
  return (
    <div className="card mb-5 me-3 p-1 listing-card text-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 listing-img"
            src={images[0]}
            alt="exterior"
          />
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
        <li className="list-group-item d-flex justify-content-between">
          <button className="btn btn-dark pb-2" onClick={deleteListing}>
            <FaTrash />
          </button>
          <UpdateListing id={_id} users={users} {...props} />
        </li>
      </ul>
    </div>
  );
};

export default ListingCard;
