import React from "react";

export default ({ items, handleComplete, handleDelete }) => {
  return (
    <section>
      <h2>Active Items</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.description}
            <button onClick={() => handleComplete(item.id)}>Complete</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
