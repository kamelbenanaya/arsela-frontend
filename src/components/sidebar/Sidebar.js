import React from "react";
import "./sidebar.css";
import Slider from "@mui/material/Slider";

const Sidebar = () => {
const [checked, setChecked] = React.useState(false);
  function valuetext(value) {
    return `${value}°C`;
  }
  
  const [value, setValue] = React.useState([0, 4000]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filter">
      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
        FILTER WITH MARQUE
      </h4>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        ACER
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        MSI
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        LENOVO
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        PHONE
      </label>

      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
        FILTER WITH PRICE
      </h4>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min = {0}
        max = {4000}
      />
      
      <p style={{color : "black", fontSize: "18px"}}>Price {value[0]} dt - {value[1]} dt </p>

      <h4 style={{ color: "black", fontWeight: "500", fontSize: "18px" }}>
      FILTER WITH CATEGOTY      </h4>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        Laptop
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        Phone
      </label>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        Accesoires
      </label>
    </div>
  );
};

export default Sidebar;
