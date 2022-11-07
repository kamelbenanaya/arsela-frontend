import React from 'react';
import { BrowserRouter as BrowserRouter,Link } from "react-router-dom";

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

export const Default = Template.bind({});
export const ShortDescription = Template.bind({})
ShortDescription.args = {
    productDesc:"short description"
}

