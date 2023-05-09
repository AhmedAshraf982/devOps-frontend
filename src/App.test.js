import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App Page Test", () => {
  it("Is the text is present in the Footer", () => {
    render(<App />);
    const linkElement = screen.getByText(/Designed &/i);
    expect(linkElement).toBeInTheDocument();
  });
});
