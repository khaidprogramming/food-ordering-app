import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [currentValue, setcurrentValue] = useState("Log in");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className=" flex justify-between shadow-lg bg-slate-100">
      <div className="logo-container">
        <img className="log0 w-32" src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className=" flex p-4 m-4 gap-9 ">
          <li>Online Status:{onlineStatus ? "🟩" : "🔴"}</li>
          <li className="hover:text-orange-400 duration-100 ">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className=" font-bold ">
            <Link to={"/cart"}>Cart-({cartItem.length})</Link>
          </li>
          <li>
            <button
              className=" bg-blue-600 px-4 py-1 rounded-md text-white "
              onClick={() => {
                if (currentValue == "Log in") {
                  setcurrentValue("Log out");
                } else {
                  setcurrentValue("Log in");
                }
              }}
            >
              {currentValue}
            </button>
          </li>
          <li>{userData.userName}</li>
        </ul>
      </div>
    </div>
  );
};

//   export default Header;
