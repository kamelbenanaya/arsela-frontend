import React from 'react';
import { BrowserRouter as BrowserRouter,Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { incrementCount } from "../../context/helpers";
import Index from './index';


export default {
  title: 'components/CartProductCard',
  component: Index,
};

const Template = (args) =>      <BrowserRouter>

   <Index {...args} />
   {/* <div style={{width:"100%",height:"80px",backgroundColor:"red",display:"flex",justifyContent:"flex-end"}}>
    <div style={{width:"20%",backgroundColor:"black",position:"relative"}}>
aaaaa
<div style={{position :"absolute",width:"100%",height:"180px",backgroundColor:"gray",top:"80px"}}>
  asdqdqsdq
</div>
    </div>

   </div> */}
   </BrowserRouter>

export const Default = Template.bind({
});
export const Primary = ({productId,
  productName,
  productImage,
  productDesc,
  productPrice,
  productBrand,
  Promotion,
  priceAfterPromo,
  quantity,
  intialprice,
  intialpricePromo}) => {
const { globalState, globalDispatch } = useGlobalContext();
const incrementCountOnClick = () => {
  globalDispatch({
    type: "incrementCount",
    productId,
    intialprice,
    intialpricePromo,
  });
};
const decrementCountonClick = () => {
  globalDispatch({
    type: "decrementCount",
    productId,
    intialprice,
    intialpricePromo,
  });
};
const deleteProductInCartOnClick = () => {
  globalDispatch({
    type: "deleteProductInCart",
    productId,
  });
};
}