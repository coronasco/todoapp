import React from "react";

class AddItem extends React.Component {
  render() {
    const { item, handleChange, onSubmit, editItem } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              placeholder="What To Do?"
              className="validate"
              onChange={handleChange}
              value={item}
            />
          </div>
          <div className="col s12 right-align">
            {editItem ? (
              <button className="btn-floating pulse btn-large">Edit</button>
            ) : (
              <button className="btn-floating pulse btn-large">Add</button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default AddItem;
