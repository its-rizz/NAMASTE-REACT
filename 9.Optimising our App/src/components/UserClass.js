import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Rizwan",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/Sreenivasulu-Kalluru"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json.name);
  }

  render() {
    const { count } = this.state;
    const { name, location, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Reset
        </button>
        <h2> Name: {name} </h2>
        <h2> Location: {location} </h2> <h3> Bio: {bio} </h3>{" "}
      </div>
    );
  }
}
export default UserClass;
