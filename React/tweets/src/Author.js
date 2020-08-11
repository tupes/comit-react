import React from "react";

export default function Author(props) {
  return (
    <span>
      <span className="name">{props.author.name}</span>
      <span className="handle">@{props.author.handle}</span>
    </span>
  );
}
