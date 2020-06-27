import React, { useState } from "react";
import Availability from "./Availability.js";
import SkillSet from "./SkillSet.js";
import Main from "../mainPage/Main.js";
// import { use } from "../../../server/routes/login.js";

const Profile = (props) => {
  //hooks
  const [mainPage, setMainPage] = useState(false);
  const [skills, setSkills] = useState([]);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const availability = [
    { date: "09/26/1994", startTime: "8PM", endTime: "9PM" },
  ];
  const schedule = [];
  // fetch and get [ {date: '', starTime: '', endTime: ''}]
  for (let i = 0; i < availability.length; i += 1) {
    schedule.push(
      <Availability
        key={i}
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
  function redirect() {
    setMainPage(true);
  }

  if (mainPage) {
    return (
      <div>
        <Main />
      </div>
    );
  }

  const handleEmailSave = () => {};

  const handleInputSave = () => {
    const body = {
      name,
      date,
      start,
      end,
    };
    fetch("/profile", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(data => props.history.push('/'))
    .catch(err => console.log('Profile fetch /profile: ERROR: ', err));
  };

  return (
    <div>
      <button onClick={redirect}>Search Tutors</button>
      <hr />
      <div>
        <input
          type="email"
          placeholder="myemail@gmail.com"
          value={email}
          onChange={setEmail(value)}
        ></input>
        <button onClick={handleEmailSave}>Save</button>
      </div>
      <hr />
      <SkillSet />
      <hr />
      <h3>Availability</h3>
      <span>
        <input type="date" value={date} onChange={setDate(value)}></input>
        <label for="timeStart">From:</label>
        <input
          type="time"
          id="timeStart"
          value={start}
          onChange={setStart(value)}
        ></input>
        <label for="timeEnd">To:</label>
        <input
          type="time"
          id="timeEnd"
          value={end}
          onChange={setEnd(value)}
        ></input>
        <button onClick={handleInputSave}>Save</button>
      </span>
      {schedule}
    </div>
  );
};

export default Profile;
