import React from "react";
import ReactDOM from "react-dom";

const Title = () => ( <
    h1 > Namaste React using the JSX < /h1>
);

const sample = < h2 > This is the sample code < /h2>;

const Comp = () => < h2 > This is the component using h2 < /h2>;

const Game = () => ( <
    div > { sample } <
    Title / >
    <
    h1 > Namaste React using the JSX < /h1> <
    /div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( < Game / > );