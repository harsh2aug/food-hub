import { useEffect, useState } from "react";
const User = () => {
  const [userInfo, setUserInfo] = useState({});
  const { name, location, avatar_url } = userInfo;
  console.log("function render");
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/harsh2aug");
    const json = await data.json();
    setUserInfo(json);
  };
  useEffect(() => {
    console.log("effect render");
    fetchData();
    return () => {
      console.log("effect return");
    };
  }, []);

  return (
    <div className="user-card">
      <img src={avatar_url} />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;
