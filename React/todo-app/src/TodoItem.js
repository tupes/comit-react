import React from "react";
import PropTypes from "prop-types";

export const TodoItem = (props) => {
  return (
    <tr>
      <td>{props.item.description}</td>
      <td>
        <input
          type="checkbox"
          checked={props.item.isComplete}
          onChange={() => props.handleCompleteClick(props.item.id)}
        />
      </td>
      <td>
        <button onClick={() => props.handleDeleteClick(props.item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object,
  handleCompleteClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};
