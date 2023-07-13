import React, { useEffect, useState } from "react";
import ListingItem from "./ListingItem";
import getAxios from "../../helper/getAxios";

const ListingsContainer = ({ filteredListings, filter, isEmpty }) => {
  const [listingsArr, setListingsArr] = useState([]);

  useEffect(() => {
    getAxios("/api/listing")
      .then((data) => setListingsArr(data.listings))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="p-4">
      <div className="container">
        <div className="d-flex justify-content-around listing-container ">
          {!filter &&
            listingsArr.map((listing) => (
              <ListingItem
                key={listing._id}
                images={listing.imageURL}
                {...listing}
              />
            ))}
          {filter && isEmpty && (
            <h1 className="min-vh-100">No matching results...</h1>
          )}
          {filter &&
            !isEmpty &&
            filteredListings.map((listing) => (
              <ListingItem
                key={listing._id + "100"}
                images={listing.imageURL}
                {...listing}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsContainer;
