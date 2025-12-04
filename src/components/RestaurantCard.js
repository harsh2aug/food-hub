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
    sla,
  } = resData.info;
  return (
    <div className="card">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt={name} />

      <div className="card-content">
        <h3 className="card-title">{name}</h3>

        <div className="card-rating-row">
          <span className="card-rating">
            <i className="fa fa-star" /> {avgRating}
          </span>
          <span className="card-sla">{sla.slaString}</span>
        </div>

        <p className="card-desc">{cuisines.join(", ")}</p>

        <p className="card-cost">{costForTwo}</p>

        <p className="card-location">
          {locality}, {areaName}
        </p>
      </div>
    </div>
  );
}
