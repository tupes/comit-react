import React from "react";

export const AddTodoItem = (props) => {
  return (
    <section>
      <h2>Add To-Do Item</h2>

      <form onSubmit={props.handleSubmit}>
        <input value={props.description} onChange={props.handleChange} />
        <button onClick={props.handleClick}>Add To-Do</button>
      </form>
    </section>
  );
};
