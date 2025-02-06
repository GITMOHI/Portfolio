// 

import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Profile from './Profile';
import { useLocation } from 'react-router-dom';

const Left = () => {
    const [color, setColor] = useState(''); // State to hold the color
    const location = useLocation(); // React Router's useLocation hook

    useEffect(() => {
     
        console.log('location: -->>', location);
        const path_name = location.pathname;
        if(path_name == '/aboutme' || path_name == '/'){
            setColor('#5BC3D5');
        }
        else if(path_name == '/portfolio'){
            setColor('#EEA73B');
        }
        else if(path_name == '/resume'){
            setColor('#54b689');
        }
        
    }, [location]); // Re-run effect when location changes

    return (
        <div className='flex flex-col items-center'>
            <div style={{backgroundColor:color}} className='sticky top-0 hidden lg:block lg:w-[277px] lg:h-screen lg:overflow-y-scroll text-white'>
                <div>
                    <Profile color={color}></Profile> 
                    <Nav color = {color}></Nav>
                </div>
            </div>
        </div>
    );
};

export default Left;
