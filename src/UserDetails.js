import React from "react";

function UserDetails(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.location}</p>
      <p>{props.car}</p>
    </div>
  );
}

export default UserDetails;
