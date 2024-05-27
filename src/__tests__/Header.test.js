import Header from "../Components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ourStore from "../utils/ourStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={ourStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  //const loginButton = screen.getByText("Login")
  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={ourStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
