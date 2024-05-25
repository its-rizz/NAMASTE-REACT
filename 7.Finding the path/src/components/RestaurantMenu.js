import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); // Initialize with null
  const { resId } = useParams();

  // Fetch menu data when the component mounts
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(RES_MENU_URL + resId);
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
        // You may want to handle the error state here, for example:
        // setResInfo(null);
      }
    };
    fetchMenu();
  }, [resId]);

  if (!resInfo) return <Shimmer />; // Render shimmer while data is loading

  // Destructure nested properties with default values to prevent errors
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  // Access itemCards with default value to prevent errors
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines} -- Rs 🤑{costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} -- {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
