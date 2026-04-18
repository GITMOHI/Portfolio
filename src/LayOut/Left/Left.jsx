import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Profile from './Profile';
import { useLocation } from 'react-router-dom';

const Left = () => {
    const [color, setColor] = useState('#5BC3D5');
    const location = useLocation();

    useEffect(() => {
        const path_name = location.pathname;
        if (path_name === '/aboutme' || path_name === '/') setColor('#5BC3D5');
        else if (path_name === '/projects') setColor('#EEA73B');
        else if (path_name === '/resume') setColor('#54b689');
        else if (path_name === '/workexperience') setColor('#5BC3D5');
        else if (path_name === '/contact') setColor('#5BC3D5');
        else if (path_name === '/blog') setColor('#5BC3D5');
    }, [location.pathname]);

    return (
        <div className="hidden shrink-0 lg:flex lg:flex-col lg:items-stretch">
            <div
                style={{ backgroundColor: color }}
                className="sticky top-0 flex h-screen w-[280px] shrink-0 flex-col overflow-y-auto border-r border-white/10 shadow-card"
            >
                <Profile color={color} />
                <Nav />
            </div>
        </div>
    );
};

export default Left;
