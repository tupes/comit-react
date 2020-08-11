import React from "react";

export default function Avatar(props) {
  return (
    <img
      className="avatar"
      src={`https://www.gravatar.com/avatar/${props.hash}`}
      alt="avatar"
    />
  );
}
