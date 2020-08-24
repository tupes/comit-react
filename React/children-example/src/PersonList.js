import React from "react";

export default function PersonList({ children }) {
  return (
    <div>
      <h1>Header</h1>
      <p>Some content</p>
      {children}
    </div>
  );
}
