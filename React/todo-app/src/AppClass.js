import React from "react";

import { AddTodoItem } from "./AddTodoItem";
import { ActiveItems } from "./ActiveItems";
import { CompletedItems } from "./CompletedItems";

export class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      description: event.target.value,
    });
  }

  handleAddItem() {
    const newItem = {
      id: this.state.items.length + 1,
      description: this.state.description,
      isComplete: false,
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      description: "",
    });
  }

  render() {
    return (
      <div>
        <h1>My To-Do List</h1>

        <AddTodoItem
          description={this.state.description}
          handleChange={this.handleChange}
          handleClick={this.handleAddItem}
        />

        <ActiveItems
          items={this.state.items.filter((item) => !item.isComplete)}
          handleCompleteClick={this.handleCompleteClick}
        />

        <CompletedItems
          items={this.state.items.filter((item) => item.isComplete)}
        />
      </div>
    );
  }
}
