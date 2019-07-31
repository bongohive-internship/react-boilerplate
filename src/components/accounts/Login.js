import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <p className="example-div">
      Welcome to the Login Page{" "}
      <Link to="/register" style={{ textDecoration: "none", color: "#79ad6f" }}>
        {" "}
        Register Here
      </Link>
    </p>
  );
}

export default Login;
