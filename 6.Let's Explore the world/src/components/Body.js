import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  //Use State Hooks
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //Use Effect Hooks
  useEffect(() => {
    fetchData();
  }, []);

  //Fetching the Data from the Swiggy UI
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    return json;
  };

  //Button that filters Resturant with rating greater than 4.3
  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setListOfRestaurants(filteredList);
  };

  //Refresh the website
  const resetFilter = () => {
    window.location.reload();
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="left">
          <button className="filter-btn" onClick={filterTopRatedRestaurants}>
            Top Rated Restaurants{" "}
          </button>{" "}
          <button className="filter-btn" onClick={resetFilter}>
            Reset{" "}
          </button>{" "}
        </div>{" "}
        <div className="right">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />{" "}
          <button
            className="filter-btn"
            onClick={() => {
              //Filter Logic on basis of the name given in input box
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredRestaurant, "Line 75");
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="res-container">
        {" "}
        {filteredRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Body;
