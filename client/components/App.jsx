import React, { useState } from "react";
import Login from "./Login.js";
import Main from "./mainPage/Main";
import Profile from "./profilePage/Profile";

const App = (props) => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [mainPage, setMainPage] = useState(false);
  const [profilePage, setProfilePage] = useState(true);

  if (loggingIn) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  if (mainPage) {
    return (
      <div>
        <Main />
      </div>
    );
  }

  if (profilePage) {
    return (
      <div>
        <Profile />
      </div>
    );
  }

  return (
    <div>
      <div>Hello World, you're in the wrong place!</div>
    </div>
  );
};

export default App;
