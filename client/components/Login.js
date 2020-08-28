import React, { useState } from "react";
require("dotenv").config();

const Login = (props) => {
  return (
    <div>
      <h1>Welcome to FreeTutorLink!</h1>
      <a href="/login">Login with LinkedIn</a>
    </div>
  );
};

export default Login;
