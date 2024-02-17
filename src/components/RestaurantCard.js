import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  //  const{resData} = props;
  const {
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
    cloudinaryImageId,
  } = resData?.info;

  const { userName } = useContext(UserContext);

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-slate-100 rounded-lg hover:shadow-xl hover:scale-95 duration-100">
      <img
        className="res-logo rounded-lg bg-center w-11/12 h-36 ml-2"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className=" text-wrap overflow-clip">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>Rs {costForTwo}</h4>
      <h4>{userName}</h4>
    </div>
  );
};

export default RestaurantCard;

export const OpenedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white rounded-lg m-4 p-2">
          Opened
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
