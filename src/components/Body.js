import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filterResList, setFilterResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const restaurant = useRestaurantList();
  const onlineStatus = useOnlineStatus();
  const { user, setUser } = useContext(UserContext);

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-600 mt-10">
        Oops! You seem to be offline. Please reconnect to the internet.
      </h1>
    );
  }
  const PromotedLabelCard = withPromotedLabel(RestaurantCard);

  const handleSearch = () => {
    const searched = restaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterResList(searched);
  };

  const handleTopRated = () => {
    const top = restaurant.filter((res) => res.info.avgRating > 4.3);
    setFilterResList(top);
  };

  const listToRender = filterResList.length ? filterResList : restaurant;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center gap-3 my-6">
        <input
          className="border border-slate-300 p-2 rounded-lg w-60 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Search restaurants..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
          className="bg-amber-500 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-600 transition"
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-600 transition"
          onClick={handleTopRated}
        >
          ⭐ Top Rated
        </button>
        <input
          className="border border-slate-300 p-2 rounded-lg w-60 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Change Username"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>

      {restaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listToRender.map((restaurant, index) => {
            return (
              <Link
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
                className="block"
              >
                {restaurant.info.veg ? (
                  <PromotedLabelCard resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
