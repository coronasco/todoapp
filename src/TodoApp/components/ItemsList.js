import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  render() {
    const { items, itemDelete, editItem, done, doneHandle } = this.props;
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
            <li
              className="collection-item"
              style={
                done
                  ? {
                      color: "#ababab",
                      cursor: "pointer",
                      textDecoration: "line-through"
                    }
                  : { color: "#333", cursor: "pointer" }
              }
              key={item.id}
            >
              <Item
                title={item.title}
                itemDelete={() => itemDelete(item.id)}
                editItem={() => editItem(item.id)}
                doneHandle={() => doneHandle(item.id)}
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
