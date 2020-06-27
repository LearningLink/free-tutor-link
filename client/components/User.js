import React, { useState } from "react";
import Main from "./mainPage/Main";
import Profile from "./profilePage/Profile";

const User = (props) => {
  const [mainPage, setMainPage] = useState(true);
  const [profilePage, setProfilePage] = useState(true);

  const handleToProfile = () => {
    setMainPage(false);
    setProfilePage(true);
  };

  const handleToMain = () => {
    setProfilePage(false);
    setMainPage(true);
  };

  if (mainPage) {
    return (
      <div>
        <Main handleToProfile={handleToProfile} />
      </div>
    );
  }

  if (profilePage) {
    return (
      <div>
        <Profile handleToMain={handleToMain}/>
      </div>
    );
  }

  return (
    <div>
      <div>Hello World, you're in the wrong place!</div>
    </div>
  );
};

export default User;
