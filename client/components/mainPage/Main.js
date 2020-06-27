import React, { useState, useEffect } from 'react';
import AvailableTutor from './AvailableTutor';
import Search from './Search';
import Profile from '../profilePage/Profile';

const Main = (props) => {
  const [error, setError] = useState(null);
  const [choice, setChoice] = useState('');
  const [availableTutors, setTutors] = useState([]);

  const tutors = [];

  if (!availableTutors.length) tutors.push(<div>No Tutors Available</div>);
  availableTutors.forEach((tutor) => {
    tutors.push(
      <AvailableTutor
        imgUrl={tutor.photo}
        name={tutor.name}
        linkedInUrl={tutor.linkedInUrl}
        date={tutor.date}
        startTime={tutor.start}
        endTime={tutor.end}
        email={tutor.email}
      />
    );
  });

  const handleSearch = (e) => {
    // const skillName = e.target.value;
    const skillName = choice;
    fetch(`/availability/${skillName}`)
      .then((resp) => resp.json())
      .then(
        (result) => {
          console.log('Tutors ', result.tutors);
          setTutors(result.tutors);
        },
        (error) => {
          setError(error);
        }
      );
  };

  const handleChoice = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={props.handleToProfile}>My Tutoring Times</button>
      </div>
      <Search handleSearch={handleSearch} handleChoice={handleChoice} choice={choice} />
      <div>{tutors}</div>
    </div>
  );
};

export default Main;
