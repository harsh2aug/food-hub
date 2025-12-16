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
    veg,
  } = resData.info;
  return (
    <div
      className="
        group
        bg-white
        rounded-2xl
        border border-slate-200
        shadow-lg
        overflow-hidden
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <div className="relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="
            w-full h-44 object-cover
            transition-transform duration-300
            group-hover:scale-[1.05]
          "
        />

        <div
          className="
          absolute bottom-2 left-2
          bg-white/90 backdrop-blur
          px-2 py-1
          rounded-md
          text-xs font-semibold
          text-amber-700
          shadow
        "
        >
          ⭐ {avgRating}
        </div>
      </div>

      <div className="p-4">
        <h3
          className="
          text-lg font-bold text-slate-800 
          group-hover:text-amber-700 transition
        "
        >
          {name}
        </h3>

        <p className="text-slate-500 mt-1 text-sm line-clamp-1">
          {cuisines.join(", ")}
        </p>

        <div className="flex items-center gap-2 text-sm mt-2">
          <span className="text-slate-600">{sla.slaString}</span>
          <span className="text-slate-400">•</span>
          <span className="font-medium text-slate-700">{costForTwo}</span>
        </div>

        <p className="text-slate-500 mt-1 text-sm">
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
        <span
          className="
            absolute top-3 left-3
            bg-linear-to-r from-amber-600 to-yellow-500
            text-white text-xs font-semibold
            px-2 py-1
            rounded-md shadow-md
            z-10
            animate-pulse
          "
        >
          ⭐ Promoted
        </span>

        <RestaurantCard {...props} />
      </div>
    );
  };
};
