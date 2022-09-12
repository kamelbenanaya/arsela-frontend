import React, { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = ({ onSubmit, onReset, children }) => {
  return (
    <>
      <div className="filter">
        {children}
        <button className="submitbuttonfilter" onClick={onSubmit}>
          Submit
        </button>
        <button className="submitbuttonfilter" onClick={onReset}>
          reset
        </button>
      </div>
    </>
  );
};

export default Sidebar;
