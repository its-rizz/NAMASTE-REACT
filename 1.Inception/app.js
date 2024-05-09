// const heading = React.createElement("h1", {}, "Hello World from React!!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Example 1.
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an H1 tag</h1>
 *      </div>
 * </div>
 */


// const parent = React.createElement(
//     "div", { id: "parent" },
//     React.createElement("div", { id: "child" }, React.createElement("h2", {}, "This is inside the h2 tag"))
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



//Example 2.
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an H1 tag</h1>
 *          <h2>I am an H2 tag</h2>
 *      </div>
 * </div>
 */



const parent = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is inside the h1 tag"),
        React.createElement("h2", {}, "This is inside the h2 tag")
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);