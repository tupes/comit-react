import React from "react";

export default function LikeButton(props) {
  return (
    <span>
      <i className="fa fa-heart" />
      {props.count > 0 ? (
        <span className="like-count">{props.count}</span>
      ) : null}
    </span>
  );
}
