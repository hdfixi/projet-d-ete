import React from 'react';
import image1 from "../assets/img/t.jpg";
import image2 from "../assets/img/t-image2.jpg";
import image3 from '../assets/img/OIP.jpg';
import image4 from '../assets/img/im.jpg';
import image5 from '../assets/img/imm.jpg';
import Search from '../components/Search';
import v1 from "../assets/img/v1.mp4"
import v2 from "../assets/img/v2.mp4"
import v3 from "../assets/img/v3.mp4"
import v4 from "../assets/img/v4.mp4"


const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-green-500'>Find</span> The best freelancer to
            satisfy your needs.
          </h1>
          <p className='max-w-[480px] mb-8 text-[#28414F]'>
           Having sufficient skill, knowledge, ability, and qualifications are the ingredients of
            our freelancers to make your worke done.
          </p>
        </div>



        <div className=' hidden flex-1 lg:flex justify-end items-end overflow-hidden text-gray-700'>

          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={image5} />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                <video autoPlay loop muted className="block object-cover w-full h-full rounded-lg" id='video'>
                    <source src={v4} type='video/mp4' />
                  </video>
                </div>
                <div className="w-full p-1 md:p-2">
                  <video autoPlay loop muted className="block object-cover w-full h-full rounded-lg" id='video'>
                    <source src={v1} type='video/mp4' />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={image2}/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={image1} />
                </div>
                <div className="w-full p-1 md:p-2">
                  <video autoPlay loop muted className="block object-cover w-full h-full rounded-lg" id='video'>
                    <source src={v2} type='video/mp4' />
                  </video>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={image4} />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={image3} />
                </div>

                <div className="w-full p-1 md:p-2">
                <video autoPlay loop muted className="block object-cover w-full h-full rounded-lg" id='video'>
                    <source src={v3} type='video/mp4' />
                  </video>
                </div>


              </div>
            </div>
          </div>

        </div>

      </div>
      <Search />
    </section>
  );
};

export default Banner;