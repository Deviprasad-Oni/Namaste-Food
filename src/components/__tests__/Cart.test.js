import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restauarnt menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordionHeader = screen.getByText("Appetizer (13)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(13);

  expect(screen.getByText("Cart 🛒(0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart 🛒(1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart 🛒(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  expect(
    screen.getByText("Your Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
