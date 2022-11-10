import React from "react";
import {
  SummaryContainer,
  SummaryBasketTitle,
  SummaryBasketDescription,
  SummaryBasketTotal,
  ContainerSummaryBasketTotal,
  SummaryBasketTotalText,
  SummaryBasketTotalValue,
  PlaceOrderButton,
  SummaryBasketTotalDt,
} from "./styles";
const BasketSummary = () => {
  return (
    <SummaryContainer>
      <SummaryBasketTitle>BASKET SUMMARY</SummaryBasketTitle>
      <SummaryBasketDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </SummaryBasketDescription>
      <ContainerSummaryBasketTotal>
        <SummaryBasketTotal>
          <SummaryBasketTotalText>Total</SummaryBasketTotalText>
          <SummaryBasketTotalValue>
            5000 <SummaryBasketTotalDt>DT</SummaryBasketTotalDt>
          </SummaryBasketTotalValue>
        </SummaryBasketTotal>
      </ContainerSummaryBasketTotal>
      <PlaceOrderButton>PLACE ORDER</PlaceOrderButton>
      <SummaryBasketDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </SummaryBasketDescription>
    </SummaryContainer>
  );
};

export default BasketSummary;
