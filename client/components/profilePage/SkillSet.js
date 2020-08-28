import React, { useEffect } from "react";

const skillSetSelection = (props) => {
  useEffect(() => {}, []);
  const checkbox = [];
  let skills = ["JavaScript", "SQL", "React", "Node Express"];
  // for (let i = 0; i < skills.length; i += 1) {
  //   checkbox.push(
  //     <div>
  //       <input type="checkbox" id="skill " name={`skills${i}`} value="skill" />
  //       <label htmlFor={`skills${i}`}>{skills[i]}</label>
  //     </div>
  //   );
  // }
  checkbox.push(props.skills);
  return (
    <div>
      <h3>Skill Set</h3>
      <div>{checkbox}</div>
      <button>Save Skills</button>
    </div>
  );
};

export default skillSetSelection;