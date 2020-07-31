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
    const newItem = {
      id: items.length + 1,
      description: description,
      isComplete: false,
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setDescription("");
  };

  const handleCompleteClick = (id) => {
    const updatedItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, isComplete: true };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDeleteClick = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>My To-Do List</h1>

      <AddTodoItem
        description={description}
        handleChange={handleChange}
        handleClick={handleAddItem}
      />

      <ActiveItems
        items={items.filter((item) => !item.isComplete)}
        handleCompleteClick={handleCompleteClick}
        handleDeleteClick={handleDeleteClick}
      />

      <CompletedItems
        items={items.filter((item) => item.isComplete)}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};
