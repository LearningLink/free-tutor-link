import React from "react";

const Search = (props) => {
  return (
    <div>
      <select name="skills" id="skills">
        <option value="PostgreSQL">PostgreSQL</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Ruby">Ruby</option>
        <option value="MongoDB">MongoDB</option>
      </select>

      <button>Search</button>
    </div>
  );
};
export default Search;
