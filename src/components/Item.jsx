import React from "react";

function Item(props) {
  function handleClick() {
    props.handleClick(props.id);
  }
  return (
    <div onClick={handleClick}>
      <li>{props.name}</li>
    </div>
  );
}

export default Item;
