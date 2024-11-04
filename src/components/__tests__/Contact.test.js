import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  afterAll(() => {
    // console.log("After All");
  });
  afterEach(() => {
    // console.log("After Each");
  });
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
  });

  it("Should load Contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should load button inside component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input inside component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
