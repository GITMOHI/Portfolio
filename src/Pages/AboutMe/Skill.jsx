import React from 'react';

const Skill = ({s}) => {
    // const {name,description,image}=s;
    // console.log(name,description,image);
    console.log(s);
    
    return (
        <div className='space-y-3'>
            <img src={s.image} className='w-20' alt="" />
            <h3 className='font-bold text-xl'>{s.name}</h3>
            <p className='font-thin'>{s.description}</p>
        </div>
    );
};

export default Skill;