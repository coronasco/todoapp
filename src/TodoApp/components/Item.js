import React from "react";

class Item extends React.Component {
  render() {
    const { title, itemDelete, editItem } = this.props;
    return (
      <div>
        <br />
        <span className="badge btn-small white-text red" onClick={itemDelete}>
          x
        </span>
        <span className="badge btn-small white-text green" onClick={editItem}>
          Edit
        </span>
        {title}
      </div>
    );
  }
}

export default Item;
