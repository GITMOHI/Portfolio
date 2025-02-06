import React, { useEffect } from 'react';

const ButtonFilters = ({handleFilter}) => {
    const genres = ['All','Web App','Frontend','Backend(Node.js)','Backend(Django)'];
    
    useEffect(()=>{
        makeActive('All');
    },[])
    const makeActive = (id)=>{
        console.log(id);
        const element = document.getElementById(id);
        const list = element.classList;
        list.add('text-[#EEA73B]');
        
        genres.map(g=>{
            if(id!=g){
                const e = document.getElementById(g);
                const list1 = e.classList;
                list1.remove('text-[#EEA73B]');
            }
        })
        

    }

    return (
        <div>
            {
                genres.map(item=><button id={item} onClick={()=>{handleFilter(item); makeActive(item)}} className='mr-4 hover:underline  hover:text-[#EEA73B] text-[#999898] font-bold' key = {item}>{item}</button>)
            }
        </div>
    );
};

export default ButtonFilters;