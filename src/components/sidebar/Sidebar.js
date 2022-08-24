import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Slider from "@mui/material/Slider";

const Sidebar = () => {
  const [marksState, setMarksState] = useState({
    ACER: false,
    MSI: false,
    LENOVO: false,
    PHONE: false,
  });
  const [priceRangeState, setPriceRangeState] = useState([0, 4000]);
  const [categoriesState, setCategoriesState] = useState({
    Laptop: false,
    Phone: false,
    Accesoires: false,
  });
  useEffect(() => {
    console.log(marksState);
    console.log("🚀 ~ file: Sidebar.js ~ line 20 ~ useEffect ~ marksState", marksState,priceRangeState,categoriesState)
  }, []);
  // useEffect(() => {
  //   console.log(priceRangeState);
  // }, [priceRangeState]);
  // useEffect(() => {
  //   console.log(categoriesState);
  // }, [categoriesState]);
  const handleMarqueChange = (event) => {
    setMarksState({
      ...marksState,
      [event.target.name]: event.target.checked,
    });
  };
  const handleCategoriesChange = (event) => {
    setCategoriesState({
      ...categoriesState,
      [event.target.name]: event.target.checked,
    });
  };
  function valuetext(priceRangeState) {
    return `${priceRangeState}°C`;
  }

  const handleChange = (event, newValue) => {
    setPriceRangeState(newValue);
  };

  return (
    <div className="filter">
      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
        FILTER WITH MARQUE
      </h4>
      <label>
        <input type="checkbox" name="ACER" onChange={handleMarqueChange} />
        ACER
      </label>
      <label>
        <input type="checkbox" name="MSI" onChange={handleMarqueChange} />
        MSI
      </label>
      <label>
        <input type="checkbox" name="LENOVO" onChange={handleMarqueChange} />
        LENOVO
      </label>
      <label>
        <input type="checkbox" name="PHONE" onChange={handleMarqueChange} />
        PHONE
      </label>

      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
        FILTER WITH PRICE
      </h4>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={priceRangeState}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={4000}
      />

      <p style={{ color: "black", fontSize: "18px" }}>
        Price {priceRangeState[0]} dt - {priceRangeState[1]} dt{" "}
      </p>

      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
        FILTER WITH CATEGOTY{" "}
      </h4>
      <label>
        <input
          type="checkbox"
          name="Laptop"
          onChange={handleCategoriesChange}
        />
        Laptop
      </label>
      <label>
        <input type="checkbox" name="Phone" onChange={handleCategoriesChange} />
        Phone
      </label>
      <label>
        <input
          type="checkbox"
          name="Accesoires"
          onChange={handleCategoriesChange}
        />
        Accesoires
      </label>
    </div>
  );
};

export default Sidebar;
