import React from "react";

const AvailableTutor = (props) => {
  return (
    <div>
      <span>
        <a href={props.linkedInUrl}>
          <img src={props.imgUrl} />
        </a>
      </span>
      <span>{props.name}</span>
      <span>{props.date}</span>
      <span>
        {props.startTime} to {props.endTime}
      </span>
      <span>
        <a href={`mailto: props.email`}>Send an Email</a>
      </span>
    </div>
  );
};

export default AvailableTutor;
