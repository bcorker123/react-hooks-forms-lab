import React,{useState} from "react";

function ItemForm({name, setName, inputCategory, setInputCategory, onItemFormSubmit}) {
  function nameChange(event){
    setName(event.target.value)
  }

  function categoryChange(event){
    setInputCategory(event.target.value)
  }
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={nameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={inputCategory} onChange={categoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
