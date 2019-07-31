import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <p className="example-div">
      Welcome to the Register Page{" "}
      <Link to="/login" style={{ textDecoration: "none", color: "#79ad6f" }}>
        {" "}
        Login Here
      </Link>
    </p>
  );
}

export default Register;
