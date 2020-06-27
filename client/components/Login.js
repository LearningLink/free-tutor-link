import React, { useState } from "react";
import Main from "./mainPage/Main";

const Login = (props) => {
  const [loggingIn, setLoggingIn] = useState(true);
  const [mainPage, setMainPage] = useState(false);

  function redirect() {
    setLoggingIn(false);
    setMainPage(true);
  }

  if (mainPage) {
    return (
      <div>
        <Main />
      </div>
    );
  }

  if (loggingIn) {
    return (
      <div>
        <h1>Welcome to FreeTutorLink!</h1>
        <button onClick={redirect}>Login with LinkedIn</button>
      </div>
    );
  }
};

export default Login;
