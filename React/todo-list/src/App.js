import React, { useState } from 'react';
import './App.css';

import AddTodoItem from './AddTodoItem';
import ActiveItems from './ActiveItems';
import CompletedItems from './CompletedItems';

function App() {
  // state
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [itemCount, setItemCount] = useState(0);

  // event handlers

  const handleChangeDescription = function(event) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  const handleAddClicked = function() {
    setItems([...items, {
      id: itemCount + 1, 
      description,
      isComplete: false
    }]);
    setItemCount(itemCount + 1);
    setDescription('');
  }

  const handleComplete = (id) => {
    setItems(items.map((item) => {
      return item.id === id 
        ? { ...item, isComplete: true}
        : item;
    }))
  }

  const handleDelete = () => {
    
  }

  // calculated from state
  const activeItems = () => items.filter((item) => !item.isComplete)

  // component
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
      </header>

      <AddTodoItem 
        description={description} 
        handleChange={handleChangeDescription}
        handleClick={handleAddClicked}  
      />

      <ActiveItems 
        items={activeItems()} 
        handleComplete={handleComplete} 
        handleDelete={handleDelete}  
      />

      <CompletedItems />
    </div>
  );
}

export default App;
