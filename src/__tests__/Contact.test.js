import { render, screen } from "@testing-library/react";
import ContactUs from "../Components/ContactUs";
import "@testing-library/jest-dom";

describe("all the test cases of contact us page", () => {
  it("should load contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load the button component", () => {
    render(<ContactUs />);
    //const button = screen.getByRole("button")
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should be the correct PlaceHolder", () => {
    render(<ContactUs />);
    const text = screen.getByPlaceholderText("Enter Your Name");
    expect(text).toBeInTheDocument();
  });

  test("Should load the inputBoxes", () => {
    render(<ContactUs />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
