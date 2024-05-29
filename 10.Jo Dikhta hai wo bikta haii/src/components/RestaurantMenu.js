import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  // Return shimmer while data is loading
  if (!resInfo) return <Shimmer />;

  // Destructure nested properties with default values to prevent errors
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  // Access itemCards with default value to prevent errors
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1 className="text-yellow-300">{name}</h1>
      <h2>
        {cuisines} -- Rs🤑 {costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card?.info.name} -- {item.card?.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
