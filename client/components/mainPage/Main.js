import React from "react";
import AvailableTutor from "./AvailableTutor";
import Search from "./Search";

const Main = (props) => {
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

  return (
    <div>
      <div>
        <button>My Tutoring Times</button>
      </div>
      <Search />
      {tutors}
    </div>
  );
};

export default Main;
