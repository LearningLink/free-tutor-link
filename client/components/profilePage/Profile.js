import React, { useState } from "react";
import Availability from "./Availability.js";
import SkillSet from "./SkillSet";

const Profile = (props) => {
  //hooks

  const availability = [
    { date: "09/26/1994", startTime: "8PM", endTime: "9PM" },
  ];
  const schedule = [];
  // fetch and get [ {date: '', starTime: '', endTime: ''}]
  for (let i = 0; i < availability.length; i += 1) {
    schedule.push(
      <Availability
        date={availability[i].date}
        startTime={availability[i].startTime}
        endTime={availability[i].endTime}
      />
    );
  }

  /*
    date: "2016-05-06",
    startTime: "12PM",
    endTime: "12AM", */

  return (
    <div>
      <button>Search Tutors</button>
      <hr />
      <div>
        <input type="email" placeholder="myemail@gmail.com"></input>
        <button>Save</button>
      </div>
      <hr />
      <SkillSet />
      <hr />
      <h3>Availability</h3>
      <span>
        <input type="date"></input>
        <label for="timeStart">From:</label>
        <input type="time" id="timeStart"></input>
        <label for="timeEnd">To:</label>
        <input type="time" id="timeEnd"></input>
        <button>Save</button>
      </span>
      {schedule}
    </div>
  );
};

export default Profile;
