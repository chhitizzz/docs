import React from 'react';
import {FaRegFileAlt} from 'react-icons/fa';

function Card() {
  return (
      <div className='relative w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5'>
        <FaRegFileAlt/>
        <p className='text-xs mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, optio?
        </p>
    </div>
  )
}

export default Card