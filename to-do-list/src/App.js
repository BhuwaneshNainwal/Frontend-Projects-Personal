import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header.js";
import { AddItem } from "./Components/AddItem.js";
import { useEffect, useState } from "react";
import { Items } from "./Components/Items.js";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [searchItem, setSearchItem] = useState("");
  const [searchDebouncedItem, setSearchDebouncedItem] = useState("");

  useEffect(() => {
    const localStorageItemsList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      localStorageItemsList.push(value);
    }
    if (localStorageItemsList.length > 0) {
      localStorageItemsList.sort((item1, item2) => item1.id - item2.id);
      setItemsList(localStorageItemsList);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <AddItem
        itemsList={itemsList}
        setItemsList={setItemsList}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        searchDebouncedItem={searchDebouncedItem}
        setSearchDebouncedItem={setSearchDebouncedItem}
      />
      <Items
        itemsList={itemsList}
        setItemsList={setItemsList}
        setEditIndex={setEditIndex}
        searchDebouncedItem={searchDebouncedItem}
      />
    </div>
  );
}

export default App;
