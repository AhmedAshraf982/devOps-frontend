import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Landing Page Test", () => {
  it("Is LandingPage Contain Login Button", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const linkElement = screen.getByRole("button", { name: "log in" });
    expect(linkElement).toBeInTheDocument();
  });
  it("Is LandingPage Contain Register Button", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const linkElement = screen.getByRole("button", { name: "register" });
    expect(linkElement).toBeInTheDocument();
  });
});
