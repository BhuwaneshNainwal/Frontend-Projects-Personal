import React, { useEffect } from "react";
import "../Styles/Items.scss";

function Items({ itemsList, setItemsList, setEditIndex, searchDebouncedItem }) {
  useEffect(() => {
    console.log("searching performed");
  }, [searchDebouncedItem]);

  const deleteOnClickHandler = (index) => {
    console.log(itemsList[index].id);
    console.log(localStorage.getItem(itemsList[index].id));
    localStorage.removeItem(itemsList[index].id);
    const updatedList = [...itemsList];
    updatedList.splice(index, 1);
    setItemsList(updatedList);
  };

  const editOnClickHandler = (index) => {
    setEditIndex(index);
  };

  const strikeThroughOnClickHandler = (index) => {
    const updatedItemsList = [...itemsList];
    updatedItemsList[index].isStrikeThrough = true;
    setItemsList(updatedItemsList);
  };

  const undoStrikeThroughOnClickHandler = (index) => {
    const updatedItemsList = [...itemsList];
    updatedItemsList[index].isStrikeThrough = false;
    setItemsList(updatedItemsList);
  };

  return (
    itemsList.length > 0 && (
      <div className="items-container">
        {itemsList
          .filter((item) =>
            searchDebouncedItem.length > 0
              ? item.itemValue.startsWith(searchDebouncedItem)
              : item
          )
          .map((item, index) => (
            <div className="item">
              {item.isStrikeThrough ? (
                <h4 className="item-strike-through">{item.itemValue}</h4>
              ) : (
                <h4>{item.itemValue}</h4>
              )}

              <div>
                <button
                  className="edit"
                  onClick={() => editOnClickHandler(index)}
                >
                  E
                </button>

                {item.isStrikeThrough ? (
                  <button
                    className="strike-through"
                    onClick={() => undoStrikeThroughOnClickHandler(index)}
                  >
                    U
                  </button>
                ) : (
                  <button
                    className="strike-through"
                    onClick={() => strikeThroughOnClickHandler(index)}
                  >
                    S
                  </button>
                )}

                <button onClick={() => deleteOnClickHandler(index)}>X</button>
              </div>
            </div>
          ))}
      </div>
    )
  );
}

export { Items };
