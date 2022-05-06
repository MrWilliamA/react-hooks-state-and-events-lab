import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterProduce, setFilterProduce] = useState(false);
  const [filterDessert, setFilterDessert] = useState(false);
  const [filterDairy, setFilterDairy] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(false);

  function filtered(event) {
    if (filterProduce) {
      setFilterProduce((filterProduce) => !filterProduce);
      setSelectedCategory((selectedCategory) => !selectedCategory);
    } else if (filterDessert) {
      setFilterDessert((filterDessert) => !filterDessert);
    } else if (filterDairy) {
      setFilterDairy((filterDairy) => !filterDairy);
    }
  }

  // let selectedCategory = getEl

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
