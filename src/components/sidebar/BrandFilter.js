import React, { useEffect, useState } from "react";
import "./sidebar.css";

export const BrandFilter = ({ brands, setBrands }) => {
  const handleMarqueChange = (event) => {
    var index = brands.findIndex((e) => e.name === event.target.name);
    let newState = brands;
    const currentCheckedState = newState[index].checked;
    newState[index].checked = !currentCheckedState;
    setBrands([...newState]);
  };

  return (
    <>
      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
        FILTER WITH MARQUE
      </h4>
      {brands &&
        brands.map((e, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                name={e.name}
                onChange={handleMarqueChange}
                checked={e.checked}
              />
              {e.name}
            </label>
          );
        })}
    </>
  );
};
