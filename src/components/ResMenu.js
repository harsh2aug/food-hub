import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
const ResMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(resId);

  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    totalRatingsString,
    locality,
    sla,
  } = restaurant || {};
  // const { groupedCard } = resInfo?.cards[4];
  console.log(menuItems);
  if (!restaurant) return <h1>Data not found</h1>;
  return (
    <div className="res-menu">
      <div className="res-menu-container">
        <div className="res-menu-info">
          <div className="res-menu-img">
            <img src={CDN_URL + cloudinaryImageId} alt={name} />
          </div>

          <div className="res-menu-details">
            <h2 className="res-name">{name}</h2>

            <div className="res-rating-row">
              <span className="res-rating">
                <i className="fa fa-star star-icon" /> {avgRating}
              </span>
              {`(${totalRatingsString})`}

              <span className="res-divider">|</span>

              <span className="res-sla">{sla.slaString}</span>

              <span className="res-divider">|</span>

              <span className="res-cost">{costForTwo}</span>
            </div>

            <p className="res-outlet">
              Outlet <span className="res-locality">{locality}</span>
            </p>

            <h4 className="res-delivery-time">{sla.slaString}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResMenu;
