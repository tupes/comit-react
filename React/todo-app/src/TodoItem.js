import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ItemsContext } from "./App";

export const TodoItem = (props) => {
  const itemsContext = useContext(ItemsContext);

  return (
    <tr>
      <td>{props.item.description}</td>
      <td>
        <input
          type="checkbox"
          checked={props.item.isComplete}
          onChange={() => itemsContext.handleCompleteClick(props.item.id)}
        />
      </td>
      <td>
        <button onClick={() => itemsContext.handleDeleteClick(props.item.id)}>
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
