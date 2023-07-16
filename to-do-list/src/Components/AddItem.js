import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../Styles/AddItem.scss";

function AddItem({
  itemsList,
  setItemsList,
  editIndex,
  setEditIndex,
  searchItem,
  setSearchItem,
  searchDebouncedItem,
  setSearchDebouncedItem,
}) {
  const [item, setItem] = useState("");

  const addItemEventReference = useRef(null);

  useEffect(() => {
    editIndex > -1 &&
      (addItemEventReference.current.target.value =
        itemsList[editIndex].itemValue);
  }, [editIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchDebouncedItem(searchItem);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchItem]);

  function itemChangeHandler(event) {
    addItemEventReference.current = event;
    setItem(event.target.value);
  }

  function addItemHandler() {
    addItemEventReference.current.target.value = "";
    setItem("");
    item.length > 0 &&
      setItemsList((itemsList) => [
        ...itemsList,
        { itemValue: item, isStrikeThrough: false },
      ]);
  }

  function editItemHandler() {
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(editIndex, 1, {
      itemValue: addItemEventReference.current.target.value,
      isStrikeThrough: false,
    });
    addItemEventReference.current.target.value = "";
    setItemsList(updatedItemsList);
    setItem("");
    setEditIndex(-1);
  }

  function deleteAllHandler() {
    let updatedItemsList = [...itemsList];
    updatedItemsList = updatedItemsList.filter(
      (item) => item.isStrikeThrough === false
    );
    setItemsList(updatedItemsList);
  }

  function searchItemChangeHandler(event) {
    setSearchItem(event.target.value);
  }

  return (
    <div className="add-item-input">
      <input
        placeholder="What would you like to add?"
        onChange={itemChangeHandler}
      />
      {itemsList.some((item) => item.isStrikeThrough === true) ? (
        <button className="delete-all-button" onClick={deleteAllHandler}>
          DeleteAll
        </button>
      ) : editIndex > -1 ? (
        <button className="edit-item-button" onClick={editItemHandler}>
          edit
        </button>
      ) : (
        <button className="add-item-button" onClick={addItemHandler}>
          Add
        </button>
      )}

      <div className="search-item-container">
        <input placeholder="Search item" onChange={searchItemChangeHandler} />
      </div>
    </div>
  );
}

export { AddItem };
