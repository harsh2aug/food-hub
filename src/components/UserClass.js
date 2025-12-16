import React from "react";

class UserClass extends React.Component {
  state = {
    userInfo: {},
  };

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/harsh2aug");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div
        className="
          bg-white 
          rounded-2xl 
          shadow-xl 
          border border-slate-200
          p-8
          text-center
        "
      >
        <img
          src={avatar_url}
          alt={name}
          className="
            w-36 h-36 
            rounded-full 
            mx-auto 
            shadow-md
            mb-4
          "
        />

        <h2 className="text-2xl font-bold text-slate-800">{name}</h2>

        {location && <p className="text-slate-500 mt-1">📍 {location}</p>}

        {bio && (
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">{bio}</p>
        )}

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/harsh2aug"
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 hover:text-black font-medium"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-bamaniya-b2b81b218/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
