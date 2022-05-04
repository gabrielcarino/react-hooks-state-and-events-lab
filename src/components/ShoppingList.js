import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All");
  let filteredItems = [];
  if (selectedCategory === "All") {
    filteredItems = items;
  }
  else {
    filteredItems = items.filter(item => item.category === selectedCategory)
  };
  const handleFilter = (e) => {
    setSelectedCategory((selectedCategory) = e.target.value);
  };
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => handleFilter(e)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map(item => <Item key={item.id} name={item.name} category={item.category} />)}
      </ul>
    </div>
  );
}

export default ShoppingList;
