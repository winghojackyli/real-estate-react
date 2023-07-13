import React, { useState } from "react";
import "./Filter.css";
import getAxios from "../../helper/getAxios";

const Filter = ({ setFilteredListings, setFilter, setIsEmpty }) => {
  const [inputs, setInputs] = useState({
    bed: 0,
    city: "Vancouver",
  });

  const changeHandler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const filterListings = (e) => {
    e.preventDefault();
    getAxios(`/api/listing/query?bed=${inputs.bed}&city=${inputs.city}`)
      .then((data) => {
        if (data.listings.length > 0) {
          setFilteredListings(data.listings);
          setIsEmpty(false);
        } else {
          setIsEmpty(true);
        }
        setFilter(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-primary text-light p-4 container-fluid text-center">
      <form action="" className="form-inline">
        <label htmlFor="beds" className="form-label me-2 h5">
          Beds:
        </label>
        <select
          name="bed"
          id="beds"
          className="me-5 rounded-2 select-box"
          onChange={changeHandler}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label htmlFor="city" className="form-label me-2 h5">
          City:
        </label>
        <select
          name="city"
          id="city"
          className="me-5 rounded-2 select-box"
          onChange={changeHandler}
        >
          <option value="Vancouver">Vancouver</option>
          <option value="Richmond">Richmond</option>
          <option value="Burnaby">Burnaby</option>
          <option value="Coquitlam">Coquitlam</option>
          <option value="New-west">New West</option>
          <option value="Surrey">Surrey</option>
        </select>
        <button
          type="submit"
          className="btn btn-dark p-1 me-2"
          onClick={filterListings}
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <button
          type="button"
          className="btn btn-dark p-1"
          onClick={() => {
            setFilter(false);
          }}
        >
          Show All
        </button>
      </form>
    </div>
  );
};

export default Filter;
