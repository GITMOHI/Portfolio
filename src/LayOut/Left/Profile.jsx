import React from 'react';
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";


const Profile = ({color}) => {
    return (
        <div className='pb-6'>
            <div className='flex flex-col items-center space-y-4 pt-6 px-4'>
                <h3 className='text-xl font-bold tracking-tight'>Mohi</h3>
                <div className="avatar">
                    <div className="w-24 rounded-full ring-2 ring-white ring-offset-2" style={{ringOffsetColor: color}}>
                        <img src="../../../public/images/bw.jpg" alt="Mohi" />
                    </div>
                </div>
                <p className='text-center text-sm leading-relaxed px-2'>Hi, my name is Mohi and I'm a Junior Software Engineer at Lab3. Welcome to my personal website!</p>
             
             
                <div className='flex flex-row gap-3 mt-4'>
                    <div className='p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all cursor-pointer'>
                      <TfiLinkedin className='text-white hover:text-current transition-colors' style={{'--hover-color': color}} />
                    </div>
                    <div className='p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all cursor-pointer'>
                      <IoLogoTwitter  className='text-white hover:text-current transition-colors' />
                    </div>
                    <div className='p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all cursor-pointer'>
                        <IoLogoGithub  className='text-white hover:text-current transition-colors' />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Profile;