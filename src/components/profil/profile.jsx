import './profile.css';
import React from 'react';
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { BsFillStarFill, BsFacebook } from 'react-icons/bs';

const Profile = () => {




  return (
    <div>

      {/* <button className='ads'><span className='plus'>+</span> Add new ads</button> */}
      <div className='bo1'>
      </div>
      <img  alt="" className='image' />
      <div className='bo2'>
        <p>sou3ad hassen</p>
      </div>
      <hr className='bo' />






      <div className='flex flex-col items-start gap-10 ml-16 mb-40'>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img  alt=''></img>
              </div>
              <div>
                <div className='font-bold text-lg'>houssem</div>
                
              </div>

            </div>
            <form className='flex flex-col gap-y-4 gap-x-4'>
            <h1
                className='  rounded w-full px-4 h-16 text-sm outline-none'
               
              > i'm a professionel designer with heigh <br/>qualifications , great passion and have<br/> the will to make my best </h1>
              <hr/>
              <h1
                className='  rounded w-full px-4 h-7 text-sm outline-none'
               
              > <span className='bg-[]'> Occupation : </span>  designer </h1>
             
              <h1
                className=' rounded w-full px-4 h-7 text-sm outline-none'
                
              > Number : 24567878 </h1>
              <div className='grid grid-cols-10 gap-2 ml-20'>
                <h1 to=''> <BsFacebook /></h1>
                <h1 to=''> <AiFillInstagram /> </h1>
                <h1 to=''> <AiFillLinkedin /></h1>
                <h1 to=''> <MdOutgoingMail /></h1>
                <h1 to=''><AiOutlineGithub /></h1>
              </div>
              <div className='flex gap-x-2'>
                <button
                  className='bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition'
                  type='submit'
                >
                contact mee
                </button>

              </div>
            </form>
          </div>








          <div className='bg-white shadow-1 p-5 rounded-lg  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
            <img className='mb-8'  alt='' />
            <div className='mb-4 flex gap-x-2 text-sm'>
              <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
                design
              </div>
              <div className='bg-[#4D6876] rounded-full text-white px-3 inline-block'>
                monastir
              </div>
            </div>
            <div className='flex items-center text-gray-600 gap-1'>
              <div className='w-10 h-10 p-1 border border-gray-300 rounded-full'>
                <img  alt=''></img>
              </div>
              <div>
                <div className='text-[#808080] '>houssem</div>

              </div>
            </div>
            <div className='text-lg font-semibold max-w-[260px]'>i will do your garden</div>
            <div className='flex gap-x-4 my-4'>
              <div className='flex items-center text-gray-600 gap-1'>

                <div className='text-[20px] rounded-full'>
                  <BsFillStarFill />
                </div>
                <div className='text-base'>3/10</div>
              </div>

            </div>
            <div className='text-lg font-semibold text-[#48bb78] mb-4'>
              <span className='text-[#808080] '>starting at</span>  $ 100
            </div>
          </div>

          
          <li class="flex">
            <a href="/new" class="hover:border-green-500 hover:border-solid hover:bg-white hover:text-green-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium my-2 py-40 px-20 ">
              <svg class="group-hover:text-green-500 mb-1 text-slate-400" width="30" height="120" fill="currentColor" aria-hidden="true">
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New project
            </a>
          </li>




        </div>
      </div>
    </div>
  );
}
export default Profile;