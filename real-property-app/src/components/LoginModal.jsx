import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import postAxios from "../helper/postAxios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const signin = (event) => {
    event.preventDefault();
    postAxios("/api/user/login", {
      email: inputs.email,
      password: inputs.password,
    })
      .then((data) => {
        if (data.auth) {
          dispatch(login());
          navigate("/admin");
        }
      })
      .catch(() => {
        window.alert("Not an authorized user!");
        setShow(false);
        navigate("/");
      });
  };

  const inputHandler = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <button className="btn btn-outline-light mx-3" onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in as Administrator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="col-form-label">
                Username:
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="username"
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="col-form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={inputHandler}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={signin} type="submit">
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
