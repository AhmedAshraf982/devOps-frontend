import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../App.css";
import BackgroundImage from "../../assets/images/bg.png";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <header style={HeaderStyle}>
      <h1 className="main-title text-center">login / register page</h1>
      <p className="main-para text-center">join us now and don't waste time</p>
      <div className="buttons text-center">
        <button className="primary-button" onClick={() => navigate("/login")}>
          log in
        </button>

        <button
          className="primary-button"
          id="reg_btn"
          onClick={() => navigate("/register")}
        >
          <span>register</span>
        </button>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
