import React from 'react';
import Banner from './Banner';
import Skills from './Skills';
;
import FeaturedProjects from './FeaturedProjects';
import Blogs from './Blogs';



const AboutMe = () => {

    return (

        <div className='w-full  '>
            <Banner></Banner>
            <Skills ></Skills>
            <FeaturedProjects></FeaturedProjects>
            <Blogs></Blogs>
        </div>
      
    );
};

export default AboutMe;