import React, { useEffect, useState } from "react";
import "./sidebar.css";

export const CategoriesFilter = ({ categoriesState, setCategoriesState }) => {
  const handleCategoriesChange = (event) => {
    var index = categoriesState.findIndex((e) => e.name === event.target.name);
    let newState = categoriesState;
    const currentCheckedState = newState[index].checked;
    newState[index].checked = !currentCheckedState;
    setCategoriesState([...newState]);
  };

  return (
    <>
      <h4 style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>
        FILTER WITH CATEGORIES{" "}
      </h4>
      {categoriesState &&
        categoriesState.map((e, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                name={e.name}
                onChange={handleCategoriesChange}
                checked={e.checked}
              />
              {e.name}
            </label>
          );
        })}
    </>
  );
};
