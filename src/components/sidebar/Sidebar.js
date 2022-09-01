import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { BrandFilter } from "./BrandFilter";
import { PriceFilter } from "./PriceFilter";
import { CategoriesFilter } from "./CategoriesFilter";

const Sidebar = ({categoriesState,setCategoriesState,brands,setBrands,setPriceRangeState,priceRangeState,onSubmit,onReset}) => {
 



  return (
    <>
      <div className="filter">
        <BrandFilter brands={brands} setBrands={setBrands} />
        <PriceFilter
          priceRangeState={priceRangeState}
          setPriceRangeState={setPriceRangeState}
        />
        <CategoriesFilter
          categoriesState={categoriesState}
          setCategoriesState={setCategoriesState}
        />
        <button className="submitbuttonfilter" onClick={onSubmit}>
          {" "}
          Submit
        </button>
        <button className="submitbuttonfilter" onClick={onReset}>
          {" "}
          reset
        </button>
      </div>
    </>
  );
};

export default Sidebar;
