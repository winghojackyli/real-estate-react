import React, { useState } from "react";
import Filter from "./Filter";
import ListingsContainer from "./ListingContainer";

const Listings = () => {
  const [filteredListings, setFilteredListings] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <>
      <Filter
        setFilteredListings={setFilteredListings}
        setFilter={setFilter}
        setIsEmpty={setIsEmpty}
      />
      <ListingsContainer
        filteredListings={filteredListings}
        filter={filter}
        isEmpty={isEmpty}
      />
    </>
  );
};

export default Listings;
