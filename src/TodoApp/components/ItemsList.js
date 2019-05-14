import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  render() {
    const { items, itemDelete, editItem } = this.props;
    return (
      <div>
        <br />
        <br />
        <ul className="collection with-header mt-4">
          {items.length ? (
            <li className="collection-header cyan lighten-5">
              <h4 className="cyan-text">Todos List</h4>
            </li>
          ) : (
            <li className="collection-item">You have no Todos</li>
          )}

          {items.map(item => (
            <li className="collection-item" key={item.id}>
              <Item
                title={item.title}
                itemDelete={() => itemDelete(item.id)}
                editItem={() => editItem(item.id)}
              />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
