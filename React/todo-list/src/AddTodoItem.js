import React from 'react';

export default ({ description, handleChange, handleClick }) => {
  return (
    <section>
      <h2>Add To-Do Item</h2>

      <input 
        type="text" 
        value={description}
        onChange={handleChange}  
      />
      <button onClick={handleClick}>Add Item</button>
    </section>
  )
}