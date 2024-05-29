import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./constants";

const useSwiggyApi = async () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const { data } = await response.json();
      const restaurants =
        data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    return listOfRestaurants;
  };
};

export default useSwiggyApi;
