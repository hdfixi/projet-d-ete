import React from 'react';

// import icons
import {BsFillStarFill} from 'react-icons/bs';

const House = ({ add }) => {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={add.addImage} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {add.category}
        </div>
        <div className='bg-[#4D6876] rounded-full text-white px-3 inline-block'>
          {add.country}
        </div>
      </div>
      
      <div className='flex items-center text-gray-600 gap-1'>
      <div className='w-10 h-10 p-1 border border-gray-300 rounded-full'>
              <img src={add.userImage}></img>
            </div>
            <div>
              <div className='text-[#808080] '>{add.username}</div>
              
            </div>
      </div>



      <div className='text-lg font-semibold max-w-[260px]'>{add.label}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
        
          <div className='text-[20px] rounded-full'>
            <BsFillStarFill />
          </div>
          <div className='text-base'>{add.star}/10</div>
        </div>
        
      </div>
      <div className='text-lg font-semibold text-[#48bb78] mb-4'> 
       <span className='text-[#808080] '>starting at</span>   {add.price}D
      </div>
    </div>
  );
};

export default House;