import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State Hooks
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Effect Hook
  useEffect(() => {
    fetchData();
  }, []);

  // Fetching Data
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const { data } = await response.json();
      const restaurants =
        data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter by Top Rated Restaurants
  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  // Reset Filter
  const resetFilter = () => {
    setSearchText(""); // Clear search input
    setFilteredRestaurants(listOfRestaurants); // Reset to original list
  };

  // Filter by Search Text
  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="my-3">
      <div className="flex justify-between">
        <div className="">
          <button
            className="mx-6 my-4 bg-slate-300 hover:bg-pink-300 hover:text-white rounded text-xl w-56"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
          <button
            className="mx-6 my-4 bg-slate-300 hover:bg-pink-300 hover:text-white rounded text-xl w-24"
            onClick={resetFilter}
          >
            Reset
          </button>
        </div>
        <div className="right">
          <input
            type="text"
            className="border border-solid h-8 border-black rounded"
            placeholder="search for resturant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mx-6 my-4 bg-slate-300 hover:bg-pink-300 hover:text-white rounded text-xl w-28"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              className="res-link"
              to={`/restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
