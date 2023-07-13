import React, { useEffect, useState } from "react";
import getAxios from "../../helper/getAxios";
import ListingCard from "./ListingCard";
import AddListing from "./AddListing";
import AddUser from "./AddUser";

const Admin = () => {
  const [listingsArr, setListingsArr] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAxios("/api/listing")
      .then((data) => setListingsArr(data.listings))
      .catch((err) => console.log(err));

    getAxios("/api/user")
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  }, [updated]);

  const notifyUpdate = () => {
    console.log(updated);
    setUpdated((prevState) => !prevState);
  };

  return (
    <section className="bg-light">
      <div className="bg-primary p-4 d-flex justify-content-around">
        <AddListing
          className="w-5-"
          notifyUpdate={notifyUpdate}
          users={users}
        />
        <AddUser notifyUpdate={notifyUpdate} />
      </div>
      <div className="container mt-4">
        <div className="d-flex justify-content-around listing-container">
          {listingsArr.map((listing) => (
            <ListingCard
              key={listing._id}
              images={listing.imageURL}
              {...listing}
              notifyUpdate={notifyUpdate}
              users={users}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admin;
