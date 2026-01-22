import React from 'react';
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";


const Profile = ({color}) => {
    return (
        <div className=' pb-8'>
            <div className='flex flex-col items-center space-y-5 pt-4 px-3'>
                <h3 className='text-2xl font-bold'>Mohi</h3>
                <div className="avatar">
                    <div className="w-32 rounded-full">
                        <img src="/images/bw.jpg" />
                    </div>
                </div>
                <p className='text-center'>Hi, my name is Mohi and I'm a Junior Software Engineer at Lab3.</p>
             
             
                <div className='flex flex-row gap-4 mt-8'>
                    <div className='p-2 bg-white rounded-full'>
                      <TfiLinkedin style={{color:color}} className=' rounded ' ></TfiLinkedin>
                    </div>
                    <div className='p-2 bg-white rounded-full'>
                      <IoLogoTwitter  style={{color:color}}  className=' rounded'></IoLogoTwitter>
                    </div>
                    <div className='p-2 bg-white rounded-full'>
                        <IoLogoGithub  style={{color:color}}  className=' rounded' ></IoLogoGithub>
                    </div>
                    <div className='p-2 bg-white rounded-full'>
                      <TfiLinkedin  style={{color:color}}  className=' rounded ' ></TfiLinkedin>
                    </div>
                    <div className='p-2 bg-white rounded-full'>
                      <TfiLinkedin   style={{color:color}}  className=' rounded ' ></TfiLinkedin>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Profile;