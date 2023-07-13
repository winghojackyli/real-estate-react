import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import putAxios from "../../helper/putAxios";
import { FaEdit } from "react-icons/fa";

const availableCities = [
  "Vancouver",
  "Richmond",
  "Burnaby",
  "Coquitlam",
  "New-west",
  "Surrey",
];

const UpdateListing = ({
  users,
  id, //listing id
  images: imageURL,
  bed,
  bath,
  city,
  price,
  floorArea,
  notifyUpdate,
  owner,
}) => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    owner: owner._id,
    city,
    price,
    floorArea,
    bed,
    bath,
    imageURL,
  });

  const handleShow = () => {
    setShow(true);
  };

  const inputHandler = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const updateListingHandler = (event) => {
    event.preventDefault();
    putAxios(`/api/listing/${id}`, {
      imageURL: inputs.imageURL,
      owner: inputs.owner,
      price: Number(inputs.price),
      city: inputs.city,
      bed: Number(inputs.bed),
      bath: Number(inputs.bath),
      floorArea: Number(inputs.floorArea),
    })
      .then(() => {
        window.alert("Listing Updated");
        notifyUpdate();
      })
      .catch((err) => console.log(err));
    setShow(false);
  };

  return (
    <>
      <button className="btn btn-dark pb-2" onClick={handleShow}>
        <FaEdit />
      </button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Listing Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 p-2">
              <label htmlFor="imageURL" className="col-form-label">
                ImagesURL:
              </label>
              <input
                type="text"
                name="imageURL"
                className="form-control"
                id="imageURL"
                onChange={inputHandler}
                value={inputs.imageURL}
              />
            </div>
            <div className="mb-3 d-flex">
              <div className="w-50 p-2">
                <label htmlFor="price" className="col-form-label">
                  Price:
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  min="0"
                  onChange={inputHandler}
                  value={inputs.price}
                />
              </div>
              <div className="w-50 p-2">
                <label htmlFor="city" className="col-form-label">
                  City:
                </label>

                <select
                  name="city"
                  id="city"
                  className="rounded-2 form-control"
                  onChange={inputHandler}
                >
                  {availableCities.map((city, i) => (
                    <option
                      key={i}
                      value={city}
                      selected={city === inputs.city ? "selected" : false}
                    >
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3 p-2">
              <label htmlFor="owner" className="col-form-label">
                Owner:
              </label>
              <select
                name="owner"
                id="owner"
                className="rounded-2 form-control"
                onChange={inputHandler}
              >
                {users.map((user) => (
                  <option
                    key={user.id}
                    value={user.id}
                    selected={user.email === owner.email ? "selected" : false}
                  >
                    {user.email}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 d-flex">
              <div className="w-50 p-2">
                <label htmlFor="bed" className="col-form-label">
                  bed:
                </label>
                <input
                  type="number"
                  name="bed"
                  className="form-control"
                  id="bed"
                  min="0"
                  onChange={inputHandler}
                  value={inputs.bed}
                />
              </div>
              <div className="w-50 p-2">
                <label htmlFor="bath" className="col-form-label">
                  bath:
                </label>
                <input
                  type="number"
                  name="bath"
                  className="form-control"
                  id="bath"
                  min="0"
                  onChange={inputHandler}
                  value={inputs.bath}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="floorArea" className="col-form-label">
                Floor Area:
              </label>
              <input
                type="number"
                name="floorArea"
                className="form-control"
                id="floorArea"
                min="0"
                onChange={inputHandler}
                value={inputs.floorArea}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={updateListingHandler}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateListing;
