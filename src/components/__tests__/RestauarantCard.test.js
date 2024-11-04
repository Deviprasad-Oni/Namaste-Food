import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withSpecialOffers } from "../RestaurantCard";
it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("Should render Restaurant card with offers with props Data", () => {
  const RestaurantCardOffers = withSpecialOffers(RestaurantCard);
  render(<RestaurantCardOffers resData={MOCK_DATA} />);

  const offerLabel = screen.getByText("ITEMS AT ₹189");
  expect(offerLabel).toBeInTheDocument();
});
