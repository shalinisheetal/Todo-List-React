import React, { useState } from "react";
import Item from "./Item";
import Input from "./Input";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  // function to handle state of item being added
  function handleChange(event) {
    setItem(event.target.value);
  }

  // function to handle adding of item
  function addItem() {
    setItemList((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  // function to handle deletion of item
  function delItem(id) {
    setItemList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input handleChange={handleChange} onClick={addItem} value={item} />
      <div>
        <ul>
          {itemList.map((item, index) => {
            return <Item id={index} handleClick={delItem} name={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
