import React from 'react';
import { BrowserRouter as BrowserRouter,Link } from "react-router-dom";

import Index from './index';


export default {
  title: 'Navbar',
  component: Index,
};

const Template = (args) =>      
<div style={{overflow:"hidden",position:"absolute",background:"green",top:"0",left:"0",buttom:"0",right:"0",width:"100%",height:"100%"}}>
   <Index {...args} />
   {/* <div style={{width:"100%",height:"80px",backgroundColor:"red",display:"flex",justifyContent:"flex-end"}}>
    <div style={{width:"20%",backgroundColor:"black",position:"relative"}}>
aaaaa
<div style={{position :"absolute",width:"100%",height:"180px",backgroundColor:"gray",top:"80px"}}>
  asdqdqsdq
</div>
    </div>

   </div> */}
   </div>;

export const Default = Template.bind({});


