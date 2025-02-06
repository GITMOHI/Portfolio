import React from 'react';

import {  createBrowserRouter } from "react-router-dom";
import AboutMe from '../Pages/AboutMe/AboutMe';
import Main from '../LayOut/Main';
import Portfolio from '../Pages/Portfolio/Portfolio';
import ServicesAndPrices from '../Pages/ServicesAndPrices/ServicesAndPrices';
import Resume from '../Pages/Resume/Resume';


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/',
           element:<AboutMe></AboutMe>
        },
        {
           path:'/aboutme',
           element:<AboutMe></AboutMe>
        },
        {
          path:'/portfolio',
          element:<Portfolio></Portfolio>
        },
        {
          path:'/serviceandprice',
          element:<ServicesAndPrices></ServicesAndPrices>
        },
        {
           path:'/resume',
           element:<Resume></Resume>
        }
      ]
    },
  ]);


export default routes;