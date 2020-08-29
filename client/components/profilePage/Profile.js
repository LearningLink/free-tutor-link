import React, { useState, useEffect } from "react";
import Availability from "./Availability.js";
import SkillSet from "./SkillSet";

const Profile = (props) => {
  const [mainPage, setMainPage] = useState(true);
  const [profilePage, setProfilePage] = useState(true);
  const [availability, setAvailability] = useState([]);
  const [skills, setSkills] = useState([]);

  // who the user is, is currently hard coded
  useEffect(() => {
    fetch("/profile/2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.availability);
        console.log(data.skills);
        setAvailability(data.availability);
        setSkills(data.skills);
      });
  }, []);

  const schedule = [];
  for (let i = 0; i < availability.length; i += 1) {
    schedule.push(
      <Availability
        key={i}
        date={availability[i].date}
        startTime={availability[i].starting_time}
        endTime={availability[i].end_time}
      />
    );
  }

  return (
    <div>
      <button onClick={props.handleToMain}>Search Tutors</button>
      <hr />
      <SkillSet skills={skills} />
      <hr />
      <h3>Availability</h3>
      <span>
        <input type="date"></input>
        <label htmlFor="timeStart">From:</label>
        <input type="time" id="timeStart"></input>
        <label htmlFor="timeEnd">To:</label>
        <input type="time" id="timeEnd"></input>
        <button>Save</button>
      </span>
      {schedule}
    </div>
  );
};

export default Profile;