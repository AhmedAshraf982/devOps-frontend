import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import { BrowserRouter as Router } from "react-router-dom";

describe("HomePage Page Test", () => {
  it("Is HomePage Contain Logout Button", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    const linkElement = screen.getByRole("button", { name: "Log out" });
    expect(linkElement).toBeInTheDocument();
  });
});
