import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo.length <= 0) {
    return <div>shimmer ui</div>;
  }

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const filteredItemCategory =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" text-center">
      <h1 className="text-xl font-bold m-4 ">{name}</h1>
      <p className=" font-bold ">
        {cuisines.join(", ")} -- Rs{costForTwo / 100} for two
      </p>

      <div>
        {filteredItemCategory.map((card, index) => (
          <ItemCategory
            key={card?.card?.card?.title}
            data={card}
            setShowIndex={() => setShowIndex(index)}
            setFalse={() => setShowIndex(null)}
            showItem={showIndex === index && true}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
