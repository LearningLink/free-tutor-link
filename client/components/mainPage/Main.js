import React, { useState, useEffect } from "react";
import AvailableTutor from "./AvailableTutor";
import Search from "./Search";
import Profile from "../profilePage/Profile";

const Main = (props) => {
  // const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  const [profilePage, setProfilePage] = useState(false);

  // HOPE TO GET DATA IN ORDER OF DATE/TIME
  // placeholder data from backend
  // expected data:
  const test = {
    imgUrl: "https://hmp.me/c5v5",
    name: "Roseanne",
    linkedInUrl: "http://google.com",
    date: "2016-05-06",
    startTime: "12PM",
    endTime: "12AM",
    email: "bogus@gmail.com",
  };
  const availableTutors = [test];
  const tutors = [];

  if (!availableTutors.length) tutors.push(<div>No Tutors Available</div>);
  availableTutors.forEach((tutor) => {
    tutors.push(
      <AvailableTutor
        imgUrl={tutor.imgUrl}
        name={tutor.name}
        linkedInUrl={tutor.linkedInUrl}
        date={tutor.date}
        startTime={tutor.startTime}
        endTime={tutor.endTime}
        email={tutor.email}
      />
    );
  });

  // fetch data from the database
  // get props for the AvailableTutor component

  // useEffect(() => {
  //   fetch('/availability/')
  //     .then(resp => resp.json())
  //     .then((result) => {
  //       console.log(result);
  //       setTutors(result);
  //     },
  //     (error) => {
  //       setError(error);
  //     })
  // }, [])

  function redirect() {
    setProfilePage(true);
  }
  // const handleTimesClick = () => {
  //   return (
  //     <div>
  //       <Profile />
  //     </div>
  //   );
  // };
  if (profilePage) {
    return (
      <div>
        <Profile />
      </div>
    );
  }
  // {tutor.email}
  // {tutor.linkedinprofile}
  // {tutor.photo}
  // {tutor.name}
  // {tutor.start}
  // {tutor.end}

  // {tutors}
  return (
    <div>
      <div>
        <button onClick={props.handleToProfile}>My Tutoring Times</button>
      </div>
      <Search />
      {tutors}
    </div>
  );
};

export default Main;
