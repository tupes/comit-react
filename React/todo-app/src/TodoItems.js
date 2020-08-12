import React from "react";

import { TodoItem } from "./TodoItem";

export const TodoItems = (props) => {
  return (
    <section>
      <h2>{props.header}</h2>

      <table>
        <tbody>
          {props.items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                handleCompleteClick={props.handleCompleteClick}
                handleDeleteClick={props.handleDeleteClick}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
