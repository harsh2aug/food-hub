import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);
  const { user } = useContext(UserContext);

  const toggleLogin = () => {
    setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Food App Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-extrabold text-slate-800 tracking-tight">
            Food<span className="text-amber-600">Hub</span>
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-sm md:text-base font-medium text-slate-700">
            <li
              className="flex items-center"
              title={onlineStatus ? "You are online" : "You are offline"}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  onlineStatus ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </li>

            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:text-amber-600 text-lg ${
                      isActive ? "text-amber-600 font-semibold" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                className="relative text-lg flex items-center hover:text-amber-600 transition"
              >
                🛒
                {cartItems.length > 0 && (
                  <span
                    className="
                      absolute 
                      -top-2 -right-3
                      bg-amber-600 
                      text-white 
                      text-xs 
                      font-bold 
                      w-5 h-5 
                      flex items-center justify-center 
                      rounded-full
                    "
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>

            <li>
              <button
                onClick={toggleLogin}
                className="
                  px-4 py-1.5 
                  rounded-lg 
                  bg-amber-500 
                  text-white 
                  hover:bg-amber-600 
                  transition 
                  shadow-sm
                  text-sm
                "
              >
                {loginBtn}
              </button>
            </li>

            {user?.name && (
              <li className="hidden md:block">
                <Link to="/about">
                  <span
                    className="
                    px-3 py-1 
                    bg-slate-100 
                    rounded-full 
                    text-slate-700 
                    text-md 
                    font-semibold
                  "
                  >
                    👋 {user.name}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
