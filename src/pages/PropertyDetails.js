import React, { useMemo } from 'react';
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,

} from "firebase/firestore";

// import adsData
import { db } from "../firebase-config";


//  useParams
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import icons
import { MdOutgoingMail } from 'react-icons/md';
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { BsFillStarFill, BsFacebook } from 'react-icons/bs';
// import link
import { Link } from 'react-router-dom';
// import comments
import Comments from '../components/comments/Comments';
import Profile from '../components/profil/profile';



const PropertyDetails = () => {

  const [adds, setAdds] = useState([]);
  const addsCollectionRef = collection(db, "adds");
  useEffect(() => {
    const getAdds = async () => {
      const data = await getDocs(addsCollectionRef);
      setAdds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAdds();
  }, []);



  const { id } = useParams();


  const property = useMemo(() => {
    return (adds.find((add) => {
      return add.id === id;
    }))
  }, [adds])
  if (!property)
   {return <div>loading</div>}


  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.category}</h2>
          <h3 className='text-lg mb-4'>{property.label}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
            {property.category}
          </div>
          <div className='bg-[#4D6876] rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-green-500'>
           {property.price} D
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={property.addImage} alt='' />
          </div>
          <div className='flex gap-x-6 text-green-600 mb-6'>

            <div className='flex gap-x-2 items-center'>
              <BsFillStarFill className='text-2xl' />
              <div className='text-lg font-medium'>{property.star}/10</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={property.userImage} alt=''></img>
            </div>
            <div>
              <div className='font-bold text-lg'>{property.username}</div>
              <Link to='' className='text-green-600 text-sm'>
                View listings
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <h1
              className='  rounded w-full px-4 h-7 text-sm outline-none'
              type='text'
              placeholder='Name*'
            > <span className='bg-[]'> Occupation : </span>  {property.occupation} </h1>
            <h1
              className=' rounded w-full px-4 h-7 text-sm outline-none'
              type='text'
              placeholder='Email*'
            > Number : {property.numero} </h1>
            <div className='grid grid-cols-10 gap-2 ml-20'>
                  <Link to=''> <BsFacebook /></Link>
                  <Link to=''> <AiFillInstagram /> </Link>
                  <Link to=''> <AiFillLinkedin /></Link>
                  <Link to=''> <MdOutgoingMail /></Link>
                  <Link to=''><AiOutlineGithub /></Link>
                </div>
            <div className='flex gap-x-2'>
              <NavLink className='bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition' to="/Profile"><span className='ml-20 pl-5'>See profile</span></NavLink>
            </div>
          </form>
        </div>
      </div>
      <div className='mt-20 pt-40'>
        <Comments currentUserId="1" />
      </div>
      
    </div>


  )

}

export default PropertyDetails;