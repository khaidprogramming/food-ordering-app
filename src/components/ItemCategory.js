import React, { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ data, setShowIndex, showItem, setFalse }) => {
  const { title, itemCards } = data.card.card;

  const handleClick = () => {
    if (showItem) {
      setFalse();
    } else {
      setShowIndex();
    }
  };

  return (
    <div className="mt-6 w-6/12 m-auto py-3 bg-slate-50 px-5">
      {/* title */}
      <div
        className=" flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span className=" font-bold text-lg">{title}</span>
        <span>{showItem ? "⬆️" : "⬇️"}</span>
      </div>
      {showItem &&
        itemCards.map((item) => (
          <ItemList key={item?.card?.info?.id} itemData={item} />
        ))}
      {/* body */}
    </div>
  );
};

export default ItemCategory;
