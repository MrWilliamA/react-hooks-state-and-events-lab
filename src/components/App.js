import React, { useState } from "react";
import itemData from "../data/items";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const [mode, setMode] = useState(false);

  function changeMode() {
    setMode((mode) => !mode);
  }

  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
