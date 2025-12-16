import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(MENU_API + resId)
      .then((response) => {
        setRestaurantList(response.data.data.cards);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [resId]);

  return {
    loading,
    restaurant: restaurantList[2]?.card?.card?.info,
    menuItems:
      restaurantList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [],
  };
};

export default useRestaurantMenu;
