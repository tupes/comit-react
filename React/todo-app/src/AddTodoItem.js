import React from "react";

export const AddTodoItem = ({ description, handleChange, handleClick }) => {
  return (
    <section>
      <h2>Add To-Do Item</h2>

      <input value={description} onChange={handleChange} />
      <button onClick={handleClick}>Add To-Do</button>
    </section>
  );
};
