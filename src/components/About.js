import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constrctor!");
  }

  componentDidMount() {
    // console.log("parent Component did mount");
  }

  render() {
    // console.log("parent render!");
    return (
      <div>
        <h1>About Class bases Component</h1>
        <h2>Hey, I'm learning from the Namaste React by Akshay Saini</h2>
        <UserClass />
        <User />
      </div>
    );
  }
}

export default About;
