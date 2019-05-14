import React, { Component } from "react";
import AddItem from "./components/AddItem";
import ItemsList from "./components/ItemsList";
import uuid from "uuid";

export default class TodoApp extends Component {
  state = {
    item: "",
    id: uuid(),
    items: [],
    editBtn: false,
    err: ""
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    if (this.state.item === "") {
      this.setState({ err: "You need to add a todo item" });
    } else {
      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editBtn: false,
        err: ""
      });
    }
  };

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  };

  editItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editBtn: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center cyan-text">TODO's</h1>
        <AddItem
          item={this.state.item}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          editItem={this.state.editBtn}
        />
        {this.state.err ? (
          <ul className="collection">
            <li className="collection-item red white-text">{this.state.err}</li>
          </ul>
        ) : null}

        <ItemsList
          items={this.state.items}
          itemDelete={this.deleteItem}
          editItem={this.editItem}
        />
      </div>
    );
  }
}
