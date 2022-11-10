import styled from "styled-components";
import media from "styled-media-query";

export const CartPage = styled.div`
  /* background-color: red; */
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
export const CartPageContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;

`}
`;
