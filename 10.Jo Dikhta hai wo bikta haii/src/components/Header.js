import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const online = useOnlineStatus();

  if (online === false)
    return <h1> Look 's Like Your Offline..... Check your connections</h1>;

  return (
    <div className="flex justify-between bg-teal-300 shadow-xl items-center">
      <div className="logo-container">
        <img className="logo h-36" src={LOGO_URL} />{" "}
      </div>{" "}
      <div className="nav-items bg-center items-center">
        <ul className="flex  text-2xl">
          <li className="text-slate-600 mx-2 cursor-default">
            ONLINE: {online ? " ✅" : " 🔴"}{" "}
          </li>{" "}
          <li className="text-slate-600 mx-2">
            {" "}
            <Link to={"/"} className="links">
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li className="text-slate-600 mx-2">
            {" "}
            <Link to={"/about"} className="links">
              About Us{" "}
            </Link>{" "}
          </li>{" "}
          <li className="text-slate-600 mx-2">
            {" "}
            <Link to={"/contact"} className="links">
              Contact Us{" "}
            </Link>{" "}
          </li>{" "}
          <li className="text-slate-600 mx-2 cursor-default"> Cart </li>{" "}
          <li className="text-slate-600 mx-2">
            <button
              className="bg-slate-400 text-white w-24 h-8 rounded hover:bg-pink-300"
              onClick={() => {
                btnState == "Login"
                  ? setBtnState("Logout")
                  : setBtnState("Login");
              }}
            >
              {" "}
              {btnState}{" "}
            </button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
