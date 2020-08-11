import React from "react";
import moment from "moment";

export default function Time(props) {
  return <span className="time">{moment(props.time).fromNow()}</span>;
}
