import React, { useState } from "react";

import { AddTodoItem } from "./AddTodoItem";
import { ActiveItems } from "./ActiveItems";
import { CompletedItems } from "./CompletedItems";

export const App = () => {
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        description: description,
        isDone: false,
      },
    ]);
    setDescription("");
  };

  const handleCompleteClick = () => {};

  const activeItems = () => items.filter((item) => !item.isDone);
  const completedItems = () => items.filter((item) => item.isDone);

  return (
    <div>
      <h1>My To-Do List</h1>

      <AddTodoItem
        description={description}
        handleChange={handleChange}
        handleClick={handleAddItem}
      />

      <ActiveItems
        items={activeItems()}
        handleCompleteClick={handleCompleteClick}
      />

      <CompletedItems items={completedItems()} />
    </div>
  );
};
