import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function SignInPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form action="/home">
        <label htmlFor="email">Email address</label>
        <br />
        <input type="email" name="first_name" required placeholder="email" />

        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
