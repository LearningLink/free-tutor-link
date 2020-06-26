import React from "react";

const Availability = (props) => {
  return (
    <div>
      <span>
        {props.date} {props.startTime}-{props.endTime}
        <button>Delete</button>
      </span>
    </div>
  );
};

export default Availability;
