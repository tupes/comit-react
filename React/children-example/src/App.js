import React from "react";

import PersonList from "./PersonList";
import Person from "./Person";

export default function App() {
  return (
    <div>
      <PersonList>
        <Person name="Mark" />
        <Person name="Tom" />
        <Person name="Sally" />
      </PersonList>
    </div>
  );
}
