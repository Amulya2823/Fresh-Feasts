const { render, screen } = require("@testing-library/react");
import Rescards from "../Components/ResCards";
import MOCK_DATA from "./mocks/resCardmock.json";
import "@testing-library/jest-dom";

it("Should render the resturant card component with props", () => {
  render(<Rescards resData={MOCK_DATA} />);

  const name = screen.getByText("Wander - Shawarmas and Momo");
  expect(name).toBeInTheDocument();
});
