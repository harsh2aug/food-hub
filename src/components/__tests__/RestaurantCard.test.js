import { render, screen } from "@testing-library/react";
import MockData from "../../components/mocks/ResCardMocks.json";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render restaurant name in the RestaurantCard", () => {
  render(<RestaurantCard resData={MockData} />);

  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

it("should render Promoted label when wrapped with HOC", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  render(<PromotedRestaurantCard resData={MockData} />);

  const promotedLabel = screen.getByText(/promoted/i);
  expect(promotedLabel).toBeInTheDocument();
});
