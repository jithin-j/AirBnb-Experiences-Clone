import React from "react";
import "../styles/navbar.css";
const navbar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/images/airbnb-logo.svg"}
        alt="airbnb-logo"
      />
    </div>
  );
};

export default navbar;
