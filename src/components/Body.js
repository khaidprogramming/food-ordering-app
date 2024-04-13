import RestaurantCard, { OpenedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useRestaurantList } from "../hooks/useRestaurantList";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredRestaurant } from "../utils/restarantSlice";

const Body = () => {
  const [value, setValue] = useState("");
  const onlineStatus = useOnlineStatus();
  // const { userName, setUser } = useContext(UserContext);
  const dispatch = useDispatch();

  useRestaurantList();

  const resList = useSelector((store) => store.restaurant.resList);
  const filteredRestaurant = useSelector(
    (store) => store.restaurant.filteredRestaurant
  );
  //  Conditional Rendering
  //   can do with ternary operator
  if (!resList) {
    return <h1>Loading</h1>;
  }

  // const OpenedRes = OpenedRestaurant(RestaurantCard);

  const handleSearch = () => {
    let searchedList = resList.filter((res) =>
      res.info.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    dispatch(addFilteredRestaurant(searchedList));
  };

  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }

  return (
    <div className="body">
      <div className="top-body flex max-w-6xl mx-auto ">
        
        {/* <div className="search m-4 p-4 ">
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
              // console.log("submitted");
            }}
          >
            submit
          </button>
        </div> */}

        <div className="filter flex items-center">
          <button
            className="  px-4 py-2 bg-gray-400 m-4 rounded-md "
            onClick={() => {
              let filteredList = resList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              dispatch(addFilteredRestaurant(filteredList));
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className=" px-4 py-2 bg-gray-400 m-4 rounded-md"
            onClick={() => {
              dispatch(addFilteredRestaurant(resList));
            }}
          >
            show all
          </button>
        </div>
        <div className="search m-4 p-4 ">
          <input
            type="text"
            placeholder="search restaurant"
            className=" border border-gray-500 p-1 rounded-md border-solid w-[300px] "
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
      </div>

      <div className="res-container flex flex-wrap max-w-6xl mx-auto">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              style={{ textDecorationLine: "none" }}
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
