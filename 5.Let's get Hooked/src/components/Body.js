import RestaurantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const filterTopRatedRestaurants = () => {
    const filteredList = resList.filter((res) => res.rating > 4);
    setListOfRestaurants(filteredList);
  };

  const resetFilter = () => {
    setListOfRestaurants(resList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={resetFilter}>
          Reset Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
