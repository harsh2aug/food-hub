import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    axios
      .get(MENU_API + resId)
      .then((response) => setRestaurantList(response.data.data.cards))
      .catch((e) => console.log(e));
  }, []);

  return [
    restaurantList[2]?.card?.card?.info,
    restaurantList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  ];
};
export default useRestaurantMenu;
