import RestaurantCard, { OpenedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BODY_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [value, setValue] = useState("");
  const onlineStatus = useOnlineStatus();

  const { userName, setUser } = useContext(UserContext);

  const OpenedRes = OpenedRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const jsonData = await data.json();
    const restaurantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setresList(restaurantData);
    setfilteredRestaurant(restaurantData);
  };

  const handleSearch = () => {
    let searchedList = resList.filter((res) =>
      res.info.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setfilteredRestaurant(searchedList);
  };

  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }

  //Conditional Rendering
  // can do with ternary operator
  if (resList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <div className="top-body flex max-w-6xl mx-auto ">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            placeholder="search restaurant"
            className=" border border-black border-solid"
            onChange={(e) => {
              // setresList(filteredRestaurant)

              setValue(e.target.value);
            }}
          ></input>
          <button
            className=" px-4 py-2 bg-blue-600 m-4 rounded-md text-white "
            onClick={handleSearch}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 ">
          <input
            type="text"
            value={userName}
            placeholder="set name"
            className=" border border-black border-solid"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          ></input>
          <button
            className=" px-4 py-2 bg-blue-600 m-4 rounded-md text-white "
            onClick={() => {
              console.log("submitted");
            }}
          >
            submit
          </button>
        </div>

        <div className="filter flex items-center">
          <button
            className="  px-4 py-2 bg-gray-400 m-4 rounded-md "
            onClick={() => {
              let filteredList = resList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className=" px-4 py-2 bg-gray-400 m-4 rounded-md"
            onClick={() => {
              setfilteredRestaurant(resList);
            }}
          >
            show all
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap max-w-6xl mx-auto">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              style={{ textDecorationLine: "none" }}
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <OpenedRes resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
