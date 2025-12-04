import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/harsh2aug");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log("Child Component Did mount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("compoment will unmount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
