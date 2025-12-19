import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
import Error from "./src/components/Error";
import { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./src/store/appStore";
import Cart from "./src/components/Cart";
import Footer from "./src/components/Footer";

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Harsh Bamaniya",
    email: "harsh@gmail.com",
  });
  const theme = useSelector((state) => state.appTheme.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow dark:bg-slate-900">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <ResMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
