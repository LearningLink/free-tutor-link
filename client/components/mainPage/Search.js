import React, { useState, useEffect } from "react";

const Search = (props) => {
  return (
    <div>
      <select
        name="skills"
        id="skills"
        value={props.choice}
        onChange={props.handleChoice}
      >
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="SQL">SQL</option>
        <option value="Node_Express">Node Express</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Redux">Redux</option>
        <option value="Ruby">Ruby</option>
        <option value="MongoDB">MongoDB</option>
      </select>
      <button onClick={props.handleSearch}>Search</button>
    </div>
  );
};

export default Search;
