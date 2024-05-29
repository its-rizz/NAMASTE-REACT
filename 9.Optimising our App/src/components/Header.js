import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const online = useOnlineStatus();

  if (online === false)
    return <h1>Look's Like Your Offline..... Check your connections</h1>;

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />{" "}
      </div>{" "}
      <div className="nav-items">
        <ul>
          <li>ONLINE :{online ? " 🟢" : " 🔴"}</li>
          <li>
            {" "}
            <Link to={"/"} className="links">
              Home
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to={"/about"} className="links">
              About Us
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to={"/contact"} className="links">
              Contact Us
            </Link>{" "}
          </li>{" "}
          <li> Cart </li>{" "}
          <li>
            <button
              className="login-button"
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
