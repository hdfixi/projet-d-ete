import React, { useState } from 'react';
import './About.css';
import { Aboutdata } from './Aboutdata';
import leftArrow from '../assets/img/leftArrow.png'
import rightArrow from '../assets/img/rightArrow.png'
import {motion} from'framer-motion'

const About = () => {
    const transition ={type: "spring" , duration: 3};
    const [selected , setSelected] = useState(0);
    const tLength = Aboutdata.length;

  return (
    <div className="About">
        <div className="left-t">
            <span mb-5>About</span>
            <span>Servini is the best way to satisfy  </span>
            <span>your needs</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate= {{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            >
                {Aboutdata[selected].review}
            </motion.span>
            <span>
            <span style={{color: '#48bb78'}}>
                {Aboutdata[selected].name}
            </span>{""}
            - {Aboutdata[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
            initial={{ opacity: 0 ,x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{ opacity: 1, x: 0}}>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0 ,x: 100}}
            transition={{...transition, duration: 2}}
            whileInView={{ opacity: 1, x: 0}}
            ></motion.div>
            <motion.img 
             key={selected}
             initial={{opacity: 0, x: 100}}
             animate= {{opacity: 1, x: 0}}
             exit={{opacity: 0, x: -100}}
             transition={transition}
             src={Aboutdata[selected].image} alt=""/>
            <div className="arrows">
                <img onClick={() => {
                selected ===0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev -1);
            }} 
            src={leftArrow} alt="" />
            <img onClick={() => {
                selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev +1);
            }} src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;