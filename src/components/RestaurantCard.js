import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({ resData }) {
  const {
    name,
    costForTwo,
    cuisines,
    avgRating,
    cloudinaryImageId,
    locality,
    areaName,
    sla,
  } = resData.info;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        bg-white dark:bg-slate-900
        border-slate-200 dark:border-slate-700
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="
            w-full h-44 object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute bottom-2 left-2
            px-2 py-1 rounded-md
            text-xs font-semibold
            bg-white/90 text-amber-700
            backdrop-blur shadow
            dark:bg-slate-800/90 dark:text-amber-400
          "
        >
          ⭐ {avgRating}
        </div>
      </div>

      <div className="p-4">
        <h3
          className="
            text-lg font-bold
            text-slate-800 dark:text-slate-100
            group-hover:text-amber-600
            transition
          "
        >
          {name}
        </h3>

        <p className="text-sm mt-1 text-slate-500 dark:text-slate-400 line-clamp-1">
          {cuisines.join(", ")}
        </p>

        <div className="flex items-center gap-2 text-sm mt-2">
          <span className="text-slate-600 dark:text-slate-300">
            {sla.slaString}
          </span>
          <span className="text-slate-400">•</span>
          <span className="font-medium text-slate-700 dark:text-slate-200">
            {costForTwo}
          </span>
        </div>

        <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">
          {locality}, {areaName}
        </p>
      </div>
    </div>
  );
}

export const withPromotedLabel = (RestaurantCard) => {
  return function WithPromotedLabel(props) {
    return (
      <div className="relative">
        <span className="absolute top-3 left-3 bg-linear-to-r from-amber-600 to-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10 animate-pulse">
          ⭐ Promoted
        </span>

        <RestaurantCard {...props} />
      </div>
    );
  };
};
