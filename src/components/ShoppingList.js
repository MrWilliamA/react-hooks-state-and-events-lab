import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function filtered(event) {
    const selected = event.target.value;
    if (selected == "Produce") {
      setSelectedCategory((selectedCategory = "Produce"));
    } else if (selected == "Dairy") {
      setSelectedCategory((selectedCategory = "Dairy"));
    } else if (selected == "Dessert") {
      setSelectedCategory((selectedCategory = "Dessert"));
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filtered}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
