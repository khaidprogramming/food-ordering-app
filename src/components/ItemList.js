import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemData }) => {
  // console.log(CDN_URL);
  // console.log(itemData);
  const { name, imageId, description } = itemData.card.info;
  const { price } = itemData?.card?.info;

  const dispatch = useDispatch();

  const handleAddToCart = (itemData) => {
    dispatch(addItem(itemData));
  };

  return (
    <div className=" border-b border-gray-200 py-3 w-full flex justify-between gap-5">
      <div className=" text-start w-10/12 ">
        <h2 className=" font-semibold py-2">{name}</h2>
        <p className=" font-thin pb-2 ">
          - Rs{price ? price / 100 : itemData?.card?.info?.defaultPrice / 100}
        </p>
        <p className=" text-xs text-gray-500">{description}</p>
      </div>
      <div className=" w-2/12  ">
        <button
          className=" bg-black text-white absolute py-1 px-2 rounded-lg "
          onClick={() => handleAddToCart(itemData)}
        >
          Add
        </button>

        <img src={CDN_URL + imageId} className=" rounded-lg  " />
        <img />
      </div>
    </div>
  );
};

export default ItemList;
