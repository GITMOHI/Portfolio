import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({s}) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className='bg-white p-6 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-300 group'
        >
            <div className='space-y-4'>
                <div className='w-16 h-16 flex items-center justify-center bg-neutral-50 rounded-lg group-hover:bg-neutral-100 transition-colors'>
                    <img src={s.image} className='w-12 h-12 object-contain' alt={s.name} />
                </div>
                <div>
                    <h3 className='font-bold text-lg text-neutral-900 mb-2'>{s.name}</h3>
                    <p className='text-sm text-neutral-600 leading-relaxed'>{s.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;