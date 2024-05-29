import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is about the About us</h1>
      <h2>Sample data to show the cards</h2>
      <User />
      <User />
      <UserClass name={"Sana Jamal"} />
    </div>
  );
};

export default About;
