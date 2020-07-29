import React from "react";

export const ActiveItems = ({ items, handleCompleteClick }) => {
  return (
    <section>
      <h2>Active Items</h2>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.description}
              <button onClick={handleCompleteClick}>Complete</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
