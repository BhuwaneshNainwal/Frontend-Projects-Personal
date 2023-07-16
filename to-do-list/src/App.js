import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header.js";
import { AddItem } from "./Components/AddItem.js";
import { useState } from "react";
import { Items } from "./Components/Items.js";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [searchItem, setSearchItem] = useState("");
  const [searchDebouncedItem, setSearchDebouncedItem] = useState("");

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
        editIndex={editIndex}
        searchDebouncedItem={searchDebouncedItem}
      />
    </div>
  );
}

export default App;
