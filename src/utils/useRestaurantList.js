import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";
import axios from "axios";
const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    axios
      .get(RESTAURANT_LIST_API)
      .then((response) =>
        setResList(
          response?.data?.data?.data?.cards[1]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        )
      )
      .catch((err) => console.error(err));
  }, []);

  return resList;
};

export default useRestaurantList;
