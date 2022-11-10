import media from "styled-media-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SummaryContainer = styled.div`
  width: 100%;
  /* height: 339px; */
  height: fit-content;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 10px #0000001a;
  border-radius: 5px;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
    width: 460px;
    box-shadow: 0px 0px 10px 10px #0000001a;
    border-radius: 5px;
`}
`;
export const SummaryBasketTitle = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  color: black;
  font-size: 22px;
  text-align: left;
  font-family: "Poppins Medium";
`;
export const SummaryBasketDescription = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  color: #b4b4b4;
  font-size: 12px;
  text-align: left;
  font-family: "Poppins regular";
`;

export const ContainerSummaryBasketTotal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  /* background-color: blue; */
  height: fit-content;
`;

export const SummaryBasketTotal = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0px 3px 6px #00000029;
  width: 100%;
  height: fit-content;
  /* background-color: beige; */
  display: flex;
  justify-content: space-between;
`;
export const SummaryBasketTotalText = styled.div`
  font-family: "Poppins regular";
  font-size: 18px;
  padding-left: 10px;
`;

export const SummaryBasketTotalValue = styled.div`
  font-family: "Poppins Medium";
  font-size: 20px;
`;
export const SummaryBasketTotalDt = styled.span`
  font-size: 20px;
  font-family: "Poppins regular";
  padding-right: 10px;
  color: #b4b4b4;
`;
export const PlaceOrderButton = styled.button`
  border-radius: 6px;
  /* width: 100%; */
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  background-color: #f26522;
  font-family: "Poppins regular";
  height: 36px;
  font-size: 15px;
  border-color: #f2652200;
  color: white;
`;
