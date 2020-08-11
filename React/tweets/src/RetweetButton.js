import React from "react";

export default function RetweetButton(props) {
  return (
    <span>
      <i className="fa fa-retweet" />
      {props.count > 0 ? (
        <span className="retweet-count">{props.count}</span>
      ) : null}
    </span>
  );
}
