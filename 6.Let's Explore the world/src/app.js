import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Container
            -Resturant Card
              -Img
              -Name of Resturant, Star, Rating,Cuisine,delivery time
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

const AppLayot = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayot />);
