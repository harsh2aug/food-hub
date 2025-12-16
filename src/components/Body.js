import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [filterResList, setFilterResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const restaurant = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>“Oops! You seem to be offline. Please reconnect to the internet.”</h1>
    );
  return (
    <div className="page-body">
      <div className="filter-bar">
        <div className="search-box-wrapper">
          <input
            className="search-input"
            placeholder="Search restaurants..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            onClick={() => {
              const filterList = restaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilterResList(filterList);
            }}
            className="btn search-btn"
          >
            Search
          </button>
        </div>

        <button
          className="btn filter-btn"
          onClick={() => {
            const filterList = restaurant.filter((x) => x.info.avgRating > 4.3);
            setFilterResList(filterList);
          }}
        >
          ⭐ Top Rated
        </button>
      </div>

      {restaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="card-grid">
          {(filterResList.length ? filterResList : restaurant).map(
            (restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
                className="card-link"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};
export default Body;
