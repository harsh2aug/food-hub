import { CDN_URL } from "../utils/constants";

export default function RestaurantCard(props) {
  const { resData } = props;
  const {
    name,
    costForTwo,
    cuisines,
    avgRating,
    cloudinaryImageId,
    locality,
    areaName,
  } = resData.info;
  return (
    <div className="card">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating} STAR</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality + ", " + areaName}</h4>
    </div>
  );
}
