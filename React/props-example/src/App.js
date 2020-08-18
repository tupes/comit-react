import React from "react";

function Person({ age, position, name: { firstName, lastName } }) {
  return (
    <div>{`${firstName} ${lastName} is ${age} years old and is a ${position}.`}</div>
  );
}

export default function App() {
  return (
    <div>
      <div>
        <Person
          name={{ firstName: "Mark", lastName: "Tupala" }}
          age="35"
          position="instructor"
        />
      </div>
      <div>
        <Person
          name={{ firstName: "Pablo", lastName: "Listingart" }}
          age="40"
          position="founder"
        />
      </div>
    </div>
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
//   name: {
//     firstName: "Pablo",
//     lastName: "Listingart",
//   },
//   age: "40",
//   position: "founder",
// };
