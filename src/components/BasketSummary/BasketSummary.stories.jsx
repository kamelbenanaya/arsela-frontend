import React from 'react';
import { BrowserRouter as BrowserRouter,Link } from "react-router-dom";

import BasketSummary from './index';


export default {
  title: 'BasketSummary',
  component: BasketSummary,
};

const Template = (args) =>   <BrowserRouter>    

   <BasketSummary {...args} />

   
</BrowserRouter>
export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#ff0', label: 'Button' };

