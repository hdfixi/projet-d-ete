import React, { useContext , useState} from 'react';


// import context
import { HouseContext } from './HouseContext';
// import components
import House from './House';
// import link
import { Link } from 'react-router-dom';
// import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { adds, loading } = useContext(HouseContext);
  const [visible, setVisible] = useState(6);
  const showMore =() =>{
    setVisible((prevValue) => prevValue +3);
  }
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (adds.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {adds.slice(0,visible).map((add, index) => {
            return (
              <Link to={`/property/${add.id}`} key={index}>
                <House add={add} />
              </Link>
            );
            
          })}
        </div>
        <div className='py-12 ml-12 pl-20' > 
        <div className='py-12 ml-12 pl-20' > 
        <div className=' ml-12 pl-20' > 
        <div className=' ml-12 pl-20' > 
            <button  className='bg-green-500 hover:bg-green-600 text-white px-10 py-5  rounded-lg transition  '  onClick={showMore} >show more</button>
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
    
  );
};

export default HouseList;