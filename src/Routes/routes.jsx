import React from 'react';

import {  createBrowserRouter } from "react-router-dom";
import AboutMe from '../Pages/AboutMe/AboutMe';
import Main from '../LayOut/Main';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Resume from '../Pages/Resume/Resume';
import WorkExperience from '../Pages/WorkExperience/WorkExperience';
import Contact from '../Pages/Contact/Contact';
import Blog from '../Pages/Blog/Blog';


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
          path:'/projects',
          element:<Portfolio></Portfolio>
        },
        {
           path:'/resume',
           element:<Resume></Resume>
        },
        {
           path:'/workexperience',
           element:<WorkExperience></WorkExperience>
        },
        {
           path:'/contact',
           element:<Contact></Contact>
        },
        {
           path:'/blog',
           element:<Blog></Blog>
        }
      ]
    },
  ]);


export default routes;