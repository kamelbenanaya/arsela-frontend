import React, { useEffect, useState } from "react";
import "./sidebar.css";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  display: none;
  width: fit-content;
  min-width: 200px;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    display: block;


`}
`;
const Sidebar = ({ onSubmit, onReset, children }) => {
  return (
    <Container>
      <div className="filter">
        {children}
        <button className="submitbuttonfilter" onClick={onSubmit}>
          Submit
        </button>
        <button className="submitbuttonfilter" onClick={onReset}>
          reset
        </button>
      </div>
    </Container>
  );
};

export default Sidebar;
