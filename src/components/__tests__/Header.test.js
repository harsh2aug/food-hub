import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the Login button in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

it("should render the Cart icon in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartIcon = screen.getByText("🛒");
  expect(cartIcon).toBeInTheDocument();
});

it("should change Login button to Logout after click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
