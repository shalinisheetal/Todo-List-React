import React from "react";

function Input(props) {
  return (
    <div className="form">
      <input onChange={props.handleChange} type="text" value={props.value} />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
