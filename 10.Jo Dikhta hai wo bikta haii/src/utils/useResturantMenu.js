import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useResturantMenu = (props) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchResturant();
  }, []);

  const fetchResturant = async () => {
    const data = await fetch(RES_MENU_URL + props);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useResturantMenu;
