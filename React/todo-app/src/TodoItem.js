import React from "react";
import PropTypes from "prop-types";

export const TodoItem = ({ item, ...props }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={() => props.handleCompleteClick(item.id)}
        />
      </td>
      <td>
        <button onClick={() => props.handleDeleteClick(item.id)}>Delete</button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object,
  handleCompleteClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};
