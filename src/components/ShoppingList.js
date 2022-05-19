import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [inputCategory, setInputCategory] = useState('Produce');

  function onItemFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: inputCategory
    };
    setItems([...items, newItem])
    setName('')
    setInputCategory('Produce')
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if(search){
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return true
      } else {
        return false
      }
    } else if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });
  
  function onSearchChange(event){
    setSearch(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
        name={name}
        setName={setName}
        inputCategory={inputCategory}
        setInputCategory={setInputCategory}
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        search={search} 
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
