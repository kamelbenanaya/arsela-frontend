import React from "react";
import {
  Card,
  Container,
  Content,
  Footer,
  Left,
  NavBar,
  Right,
  Rightitem,
  CardLeft,
  CardCenter,
  CardRight,
  BrandWrapper,
  ProductinfoWrapper,
  RatingWrapper,
  ProductName,
} from "./styles";
const Test = () => {
  return (
    <Container>
      {" "}
      <NavBar />
      <Content>
        {" "}
        <Left>
          <Card>
            <CardLeft />
            <CardCenter>
              <BrandWrapper />
              <ProductinfoWrapper>
                <ProductName>Product Name</ProductName>
              </ProductinfoWrapper>
              <RatingWrapper />
            </CardCenter>
            <CardRight />
          </Card>
        </Left>
        <Right>{/* <Rightitem /> */}</Right>
      </Content>
      <Footer />
    </Container>
  );
  // return <div style={{ backgroundColor: "red", height: "100%" }}>test</div>;
};
export default Test;
