import React from "react";

export const CompletedItems = (props) => {
  return (
    <section>
      <h2>Completed Items</h2>

      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              {item.description}
              <button>Complete</button>
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
