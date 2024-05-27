import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_MENU from "./mocks/resMenumock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestuarantMenu from "../Components/RestuarantMenu";
import { Provider } from "react-redux";
import ourStore from "../utils/ourStore";
import Header from "../Components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU),
  })
);

it("Should load the resturant menu component , accordian", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={ourStore}>
          <Header />
          <RestuarantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (15)");
  fireEvent.click(accordianHeader);

  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(15);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByTestId("cart")).toBeInTheDocument();
});

it("should have cart items as zero when clicked on clear cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={ourStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);
  expect(
    screen.getByText("Your cart is empty , Add Items to your cart")
  ).toBeInTheDocument();
});
