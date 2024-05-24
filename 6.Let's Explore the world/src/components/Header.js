import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />{" "}
      </div>{" "}
      <div className="nav-items">
        <ul>
          <li> Home </li> <li> About Us </li> <li> Contact Us </li>{" "}
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
