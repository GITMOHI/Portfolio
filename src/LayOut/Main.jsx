import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Left from './Left/Left';
import Right from './Right/Right';

const Main = () => {

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
        
    }, [location]); // Re-run effect when location changes

    return (
        <div className="flex flex-col  lg:flex-row gap-2">
            
             <div style={{backgroundColor:color}} className=' block lg:hidden'>
               <div className="navbar">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost text-2xl text-white font-bold">Mohi</a>
                    </div>
                  
                    </div>
             </div>

            <Left></Left>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;