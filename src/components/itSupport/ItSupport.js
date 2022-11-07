import React from "react";
import "./itsupport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import ItSupportItem from "./ItSupportItem";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: none;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
  display: flex;
    /* screen width is less than 768px (medium) */


`}
`;

export const ItSupport = () => {
  return (
    <Container>
      <div className="itsupport">
        <ItSupportItem
          title="Flexible pricing policy"
          description="always competitive prices and an extensive loyalty program for our  customers"
        >
          {" "}
          <FontAwesomeIcon icon={faPiggyBank} className="itsupporticons" />
        </ItSupportItem>
        <div className="divider"></div>
        <ItSupportItem
          title="A team of professionals"
          description="experienced speciallists who have been certified by world vendors"
        >
          {" "}
          <FontAwesomeIcon icon={faPeopleGroup} className="itsupporticons" />
        </ItSupportItem>
        <div className="divider"></div>
        <ItSupportItem
          title="Extensive work experience"
          description="And we continue  to develop successfully. as well as our customers "
        >
          {" "}
          <FontAwesomeIcon icon={faThumbsUp} className="itsupporticons" />
        </ItSupportItem>
        <div className="divider"></div>
        <ItSupportItem
          title="Free shipping"
          description="Operational logistics at the expense of the supplier"
        >
          {" "}
          <FontAwesomeIcon icon={faTruckFast} className="itsupporticons" />{" "}
        </ItSupportItem>
      </div>
    </Container>
  );
};
