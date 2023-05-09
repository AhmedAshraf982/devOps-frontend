import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login Page Test", () => {
  it("Email input should have type email", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const linkElement = screen.getByPlaceholderText("email");
    expect(linkElement).toHaveAttribute("type", "email");
  });
  it("Password input should have type Password", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const linkElement = screen.getByPlaceholderText("Password");
    expect(linkElement).toHaveAttribute("type", "password");
  });
});
