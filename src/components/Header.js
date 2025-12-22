import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTheme } from "../store/themeSlice";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.appTheme.theme);

  const toggleLogin = () => {
    setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="
  sticky top-0 z-50 shadow-md border-b transition-colors
  bg-white border-slate-200 text-slate-800
  dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100
"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Food App Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-extrabold tracking-tight">
            Food
            <span className="text-amber-600">Hub</span>
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="
        md:hidden p-2 rounded-md
        text-slate-700 hover:bg-amber-100
        dark:text-slate-200 dark:hover:bg-slate-800
        focus:outline-none focus:ring-2 focus:ring-amber-500
      "
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`
        flex-col md:flex-row md:items-center gap-6
        text-sm md:text-base font-medium
        text-slate-700 dark:text-slate-200

        ${
          menuOpen
            ? "flex absolute top-full left-0 w-full p-4 shadow-md " +
              "bg-white border-t border-slate-200 " +
              "dark:bg-slate-900 dark:border-slate-700"
            : "hidden md:flex"
        }
      `}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="md:hidden">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          {["/", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg transition hover:text-amber-600 ${
                  isActive ? "text-amber-600 font-semibold" : ""
                }`
              }
            >
              {["Home", "About", "Contact"][i]}
            </NavLink>
          ))}

          <Link
            to="/cart"
            className="relative text-lg"
            onClick={() => setMenuOpen(false)}
          >
            🛒
            {cartItems.length > 0 && (
              <span
                className="
            absolute -top-2 -right-3 w-5 h-5
            bg-amber-600 text-white text-xs
            rounded-full flex items-center justify-center
          "
              >
                {cartItems.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => dispatch(changeTheme())}
            aria-label="Toggle theme"
            className="
          w-9 h-9 rounded-full border flex items-center justify-center
          bg-slate-100 text-slate-700 border-slate-300
          hover:bg-slate-200
          dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600
          dark:hover:bg-slate-700
          transition
        "
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            onClick={toggleLogin}
            className="
          px-4 py-1.5 rounded-lg
          bg-amber-500 text-white hover:bg-amber-600
          transition shadow-sm text-sm
        "
          >
            {loginBtn}
          </button>

          {user?.name && (
            <span
              className="
          hidden md:inline-block
          px-3 py-1 rounded-full
          bg-slate-100 text-slate-700
          dark:bg-slate-800 dark:text-slate-200
        "
            >
              👋 {user.name}
            </span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
