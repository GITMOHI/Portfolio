import React from 'react';

const FeatProject = ({fp}) => {
    const{image_link,project_heading,description}=fp;
    return (
        <div className='h-44 overflow-hidden relative flex flex-col lg:flex-row items-start gap-4 bg-[#FAFAFA] border rounded-xl '>
            <div className='absolute w-full h-full hover:bg-[#3b3a3a] opacity-10'></div>
            <img src={image_link} className='w-56 h-44' alt="" />
            <div className='space-y-2 p-4'>
                <h2 className='font-bold text-xl'>{project_heading}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default FeatProject;