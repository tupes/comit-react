import React from "react";

export const ActiveItems = (props) => {
  return (
    <section>
      <h2>Active Items</h2>

      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              {item.description}
              <button onClick={() => props.handleCompleteClick(item.id)}>
                Complete
              </button>
              <button onClick={() => props.handleDeleteClick(item.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
