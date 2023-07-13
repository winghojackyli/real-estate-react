import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import postAxios from "../../helper/postAxios";

const AddListing = ({ notifyUpdate, users }) => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    city: "Vancouver",
    owner: "6387fca0eb815855465fb529",
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

  const addListingHandler = (event) => {
    event.preventDefault();

    postAxios("/api/listing/", {
      imageURL: inputs.imageURL.split(","),
      price: Number(inputs.price),
      city: inputs.city,
      owner: inputs.owner,
      bed: Number(inputs.bed),
      bath: Number(inputs.bath),
      floorArea: Number(inputs.floorArea),
    })
      .then((data) => {
        window.alert("Listing Added");
        setShow(false);
        notifyUpdate();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button className="btn btn-dark btn-lg mx-3" onClick={handleShow}>
        Add New Listing
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Listing Information</Modal.Title>
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
                  <option value="Vancouver">Vancouver</option>
                  <option value="Richmond">Richmond</option>
                  <option value="Burnaby">Burnaby</option>
                  <option value="Coquitlam">Coquitlam</option>
                  <option value="New-west">New West</option>
                  <option value="Surrey">Surrey</option>
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
                  <option key={user._id} value={user._id}>
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
                />
              </div>
            </div>
            <div className="mb-3 w-50 p-2">
              <label htmlFor="floorArea" className="col-form-label ">
                Floor Area:
              </label>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  name="floorArea"
                  className="form-control"
                  id="floorArea"
                  min="0"
                  onChange={inputHandler}
                />
                <span className="ms-2">sqft</span>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addListingHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddListing;

// imageURL, price, city, owner, bed, bath, floorArea

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31J1UA5QI_CCSR0hMi-Ekgft_zdpM6U_v9g&usqp=CAU,http://cdn.shopify.com/s/files/1/0225/6473/3000/articles/6fd8ded6d156de55d4519e36769ffb76_1200x1200.jpg?v=1666241585

// http://cdn.shopify.com/s/files/1/0225/6473/3000/articles/6fd8ded6d156de55d4519e36769ffb76_1200x1200.jpg?v=1666241585
/*

*/
