import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Slider from "@mui/material/Slider";


export const PriceFilter = ({priceRangeState,setPriceRangeState}) => {
  function valuetext(priceRangeState) {
    return `${priceRangeState}°C`;
  }

  const handleChange = (event, newValue) => {
    setPriceRangeState(newValue);
  };
  return (
    <>
      <h4 style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>
        FILTER WITH PRICE
      </h4>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={priceRangeState}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={5000}
      />

      <p style={{ color: "black", fontSize: "16px" }}>
        Price {priceRangeState[0]} dt - {priceRangeState[1]} dt{" "}
      </p>
    </>
  );
};
