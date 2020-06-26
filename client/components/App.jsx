import React, { useState } from "react";

const App = (props) => {
  const [loggingIn, setLoggingIn] = useState(true);
  const [mainPage, setMainPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);

  if (logginIn) {
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
