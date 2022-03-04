import "./redirect-button.css";
import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = ({ route, text }) => {
  return (
    <div className="redirect-link-holder">
      <Link className="redirect-link" to={route}>
        {text}
      </Link>
    </div>
  );
};

export default RedirectButton;
