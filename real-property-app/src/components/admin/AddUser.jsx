import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import postAxios from "../../helper/postAxios";

const AddUser = ({ notifyUpdate }) => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});

  const inputHandler = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleShow = () => {
    setShow(true);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    postAxios("/api/user/", {
      name: inputs.name,
      email: inputs.email,
      tel: inputs.tel,
    })
      .then((data) => {
        window.alert("User Added");
        notifyUpdate();
        setShow(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button className="btn btn-dark btn-lg mx-3" onClick={handleShow}>
        Add New User
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 p-2">
              <label htmlFor="name" className="col-form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3 p-2">
              <label htmlFor="email" className="col-form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3 p-2">
              <label htmlFor="tel" className="col-form-label">
                Tel:
              </label>
              <input
                type="tel"
                placeholder="(XXX)-XXX-XXXX"
                name="tel"
                className="form-control"
                id="tel"
                onChange={inputHandler}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={addUserHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUser;
