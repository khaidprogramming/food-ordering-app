import { useEffect, useState } from "react";
import { BODY_URL } from "../utils/constants";
import { UseDispatch, useDispatch } from "react-redux";
import { addFilteredRestaurant, addResList } from "../utils/restarantSlice";

export const useRestaurantList = () => {

    const dispatch = useDispatch()


  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const jsonData = await data.json();
    const restaurantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(restaurantData);
    dispatch(addResList(restaurantData))
    dispatch(addFilteredRestaurant(restaurantData))
   
  };

  useEffect(() => {
    fetchData();
  },[]);
};
