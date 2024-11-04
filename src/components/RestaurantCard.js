import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-details">
        <h3 className="font-bold py-4 text -lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        <h4> User : {loggedInUser}</h4>
      </div>
    </div>
  );
};
// Higher Order Component

// input: RestaurantCard ==>> RestaurantCardPromoted

export const withSpecialOffers = (ResturantCard) => {
  return (props) => {
    const { header, subHeader } = props.resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        <label className="absolute bg-gray-600 text-white  m-2 p-2 rounded-lg">
          {header + " " + subHeader}
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
