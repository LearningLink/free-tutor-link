import React, { useState, useEffect } from "react";
// import { Link, withRouter } from "react-router-dom";
const Search = (props) => {
  const [skills, setSkills] = useState([]);
  const [choice, setChoice] = useState("");
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  // isLoaded state also ?

  // Getting the list of skills from the database for the dropdown
  // useEffect(() => {
  //   fetch("/main")
  //     .then((res) => {
  //       console.log(res);
  //       res.json();
  //     })
  //     .then(
  //       (result) => {
  //         setSkills(result.skills);
  //       },
  //       (error) => {
  //         setError(error);
  //       }
  //     );
  // }, []);

  // onClick={}
  // <Link to={"/availabilty"}>
  //       <button>Search</button>
  //     </Link>

  // {skills.map((skill) => (
  //   <option key={skill}>{skill}</option>
  // ))}
  const handleSearch = (e) => {
    // const skillName = e.target.value;
    const skillName = choice;
    fetch(`/availability/${skillName}`)
      .then((resp) => resp.json())
      .then(
        (result) => {
          console.log(result.tutors);
          setTutors(result.tutors);
        },
        (error) => {
          setError(error);
        }
      );
  };

  // const skillsOptions = skills.map((skill, idx) => {
  //   return (
  //     <option key={idx} value={idx}>
  //       {skill}
  //     </option>
  //   );
  // });

  // {skillsOptions}
  return (
    <div>
      <select
        name="skills"
        id="skills"
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
      >
        <option value="PostgreSQL">PostgreSQL</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Node Express">Node Express</option>
        <option value="Ruby">Ruby</option>
        <option value="MongoDB">MongoDB</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// export default withRouter(Search);
export default Search;
