import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import ResMenuShimmer from "./ResMenuShimmer";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = () => {
  const { resId } = useParams();
  const { restaurant, menuItems, loading } = useRestaurantMenu(resId);

  const [openCategory, setOpenCategory] = useState(null);

  if (loading) return <ResMenuShimmer />;

  if (!restaurant)
    return (
      <h1 className="text-center text-xl text-red-600 font-semibold mt-10">
        Data not found
      </h1>
    );

  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    totalRatingsString,
    locality,
    sla,
  } = restaurant;

  const categories = menuItems.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleAccordions = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 flex flex-col md:flex-row gap-6">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="rounded-xl w-full md:w-1/3 h-48 object-cover shadow"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-slate-800">{name}</h2>

          <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg font-medium">
              ⭐ {avgRating}
            </span>
            <span className="text-slate-500">({totalRatingsString})</span>
            <span className="text-slate-400">•</span>
            <span>{sla?.slaString}</span>
            <span className="text-slate-400">•</span>
            <span>{costForTwo}</span>
          </div>

          <p className="text-slate-500 mt-2 text-sm">
            Outlet:{" "}
            <span className="font-semibold text-slate-700">{locality}</span>
          </p>

          <p className="text-emerald-600 font-semibold mt-3">
            {sla?.slaString}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Menu</h3>

        <ul className="space-y-4">
          {categories.map((group, idx) => {
            const title = group?.card?.card?.title;
            const items = group?.card?.card?.itemCards;
            const id = title + "_" + idx;

            return (
              <li
                key={id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div
                  onClick={() => handleAccordions(id)}
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50 transition rounded-xl"
                >
                  <span className="text-lg font-semibold text-slate-800">
                    {title}{" "}
                    <span className="text-slate-500 text-sm">
                      ({items?.length})
                    </span>
                  </span>

                  <span
                    className={`text-xl text-slate-600 transition-transform duration-300 ${
                      openCategory === id ? "rotate-180" : ""
                    }`}
                  >
                    🔽
                  </span>
                </div>
                {openCategory === id && (
                  <div className="border-t border-slate-200 p-4">
                    <RestaurantCategory data={items} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResMenu;
