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
      <h1
        className="text-center text-xl font-semibold mt-16
        text-red-600 dark:text-red-400"
      >
        🚫 You’re offline. Please check your internet connection.
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
    <main
      className="
      min-h-screen
      bg-slate-50 dark:bg-slate-950
      transition-colors
    "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
          flex flex-wrap gap-4 items-center
          py-8
        "
        >
          <input
            className="
              w-64 px-3 py-2 rounded-lg
              border border-slate-300
              bg-white text-slate-700
              focus:ring-2 focus:ring-amber-400
              focus:outline-none
              dark:bg-slate-900 dark:text-slate-200
              dark:border-slate-700
            "
            placeholder="Search restaurants..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="
              px-4 py-2 rounded-lg
              bg-amber-500 text-white
              hover:bg-amber-600
              transition shadow
            "
          >
            Search
          </button>

          <button
            onClick={handleTopRated}
            className="
              px-4 py-2 rounded-lg
              bg-emerald-500 text-white
              hover:bg-emerald-600
              transition shadow
            "
          >
            ⭐ Top Rated
          </button>

          <input
            className="
              w-60 px-3 py-2 rounded-lg
              border border-slate-300
              bg-white text-slate-700
              focus:ring-2 focus:ring-amber-400
              focus:outline-none
              dark:bg-slate-900 dark:text-slate-200
              dark:border-slate-700
            "
            placeholder="Change Username"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>

        {restaurant.length === 0 ? (
          <Shimmer />
        ) : (
          <div
            className="
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            pb-16
          "
          >
            {listToRender.map((restaurant) => (
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Body;
