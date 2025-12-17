import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);
  const { user } = useContext(UserContext);

  const toggleLogin = () => {
    setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
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

        {/* Hamburger button for small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Toggle menu"
        >
          {/* Icon: Hamburger or Close */}
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <nav
          className={`flex-col md:flex-row md:flex md:items-center gap-6 text-sm md:text-base font-medium text-slate-700
            ${
              menuOpen
                ? "flex absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-md md:static md:shadow-none md:border-none p-4 md:p-0"
                : "hidden md:flex"
            }
          `}
        >
          {/* Online status */}
          <div
            className="flex items-center mb-4 md:mb-0"
            title={onlineStatus ? "You are online" : "You are offline"}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="ml-2 text-sm md:hidden">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)} // close menu on nav click
              className={({ isActive }) =>
                `block md:inline transition hover:text-amber-600 text-lg ${
                  isActive ? "text-amber-600 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative flex items-center text-lg hover:text-amber-600 transition"
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

          {/* Login Button */}
          <button
            onClick={() => {
              toggleLogin();
              setMenuOpen(false);
            }}
            className="
              px-4 py-1.5 
              rounded-lg 
              bg-amber-500 
              text-white 
              hover:bg-amber-600 
              transition 
              shadow-sm
              text-sm
              mt-4 md:mt-0
              w-full md:w-auto
            "
          >
            {loginBtn}
          </button>

          {/* User name */}
          {user?.name && (
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="
                hidden md:inline-block
                px-3 py-1 
                bg-slate-100 
                rounded-full 
                text-slate-700 
                text-md 
                font-semibold
              "
            >
              👋 {user.name}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
