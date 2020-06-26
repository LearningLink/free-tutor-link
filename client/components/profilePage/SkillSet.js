import React from "react";

const skillSetSelection = (props) => {
  const checkbox = [];
  let skills = ["Javascript", "SQL", "HTML", "Python", "Java"];
  for (let i = 0; i < skills.length; i += 1) {
    checkbox.push(
      <div>
        <input type="checkbox" id="skill " name={`skills${i}`} value="skill" />
        <label htmlFor={`skills${i}`}>{skills[i]}</label>
      </div>
    );
  }
  return (
    <div>
      <h3>Skill Set</h3>
      <div>{checkbox}</div>
      <button>Save Skills</button>
    </div>
  );
};

export default skillSetSelection;
