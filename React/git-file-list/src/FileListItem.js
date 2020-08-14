import React from "react";
import moment from "moment";

import FileName from "./FileName";

function Person({ age, position, name: { firstName, lastName } }) {
  return (
    <div>{`${firstName} ${lastName} is ${age} years old and is a ${position}.`}</div>
  );
}

export default function FileListItem(props) {
  return (
    <>
      <td>
        <Person
          name={{ firstName: "Mark", lastName: "Tupala" }}
          age="35"
          position="instructor"
        />
      </td>
      <td>
        <Person name="Pablo" age="40" position="founder" />
      </td>
      {/* <td className="file-title"> */}
      {/* <FileName fileType={props.file.type} fileName={props.file.name} />
      </td>
      <td className="message">{props.file.latestCommit.message}</td>
      <td className="time">{moment(props.file.updated_at).fromNow()}</td> */}
    </>
  );
}

// props = {
//   name: {
//     firstName: "Mark",
//     lastName: "Tupala",
//   },
//   age: "35",
//   position: "instructor",
// };

// props = {
//   name: "Pablo",
//   age: "40",
//   position: "founder",
// };
