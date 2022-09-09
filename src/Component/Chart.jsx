import React from 'react';
import { AreaChart , Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer}from 'recharts';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase-config';
const today = new Date();
const monthSeven = new Date(new Date().setMonth(today.getMonth()-6));
const monthSix = new Date(new Date().setMonth(today.getMonth()-5));
const monthFive = new Date(new Date().setMonth(today.getMonth() - 4));
const monthFour = new Date(new Date().setMonth(today.getMonth() - 3));
const monthThree = new Date(new Date().setMonth(today.getMonth() - 2));
const monthTwo = new Date(new Date().setMonth(today.getMonth()-1));
const monthOne = new Date(new Date().setMonth(today.getMonth()));
const monthOneQuery = query(collection(db, "adds"),where("Timestamp", "<=", monthOne),where("Timestamp", ">", monthTwo));
const monthTwoQuery = query(collection(db, "adds"),where("Timestamp", "<=", monthTwo),where("Timestamp", ">",monthThree));
const monthThreeQuery = query(collection(db, "adds"),where("Timestamp", "<=", monthThree),where("Timestamp", ">",monthFour));
const monthFourQuery = query(collection(db, "adds"),where("Timestamp", "<=", monthFour),where("Timestamp", ">",monthFive));
const monthFiveQuery = query(collection(db, "adds"),where("Timestamp", "<=", monthFive),where("Timestamp", ">",monthSix));
const monthSixQuery = query(collection(db, "adds"),where("Timestamp", "<=",monthSix),where("Timestamp", ">",monthSeven));
const monthOneData = await getDocs(monthOneQuery);
const monthTwoData = await getDocs(monthTwoQuery);
const monthThreehData = await getDocs(monthThreeQuery);
const monthFourData = await getDocs(monthFourQuery);
const monthFiveData = await getDocs(monthFiveQuery);
const monthSixData = await getDocs(monthSixQuery);

const data = [
    { name:monthSix, Total:monthSixData.docs.length},
    { name:monthFive, Total:monthFiveData.docs.length},
    { name:monthFour , Total:monthFourData.docs.length},
    { name:monthThree, Total:monthThreehData.docs.length},
    { name:monthTwo, Total:monthTwoData.docs.length },
    { name: monthOne, Total:monthOneData.docs.length},
    
    
    
   
    
  ];
const Chart = () => {
    return (
        <div className="chart">
            <div className='title'>Last six months (adds)</div>
            <ResponsiveContainer width={"100%"} aspect={3}>
              <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#48bb78" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#48bb78" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              <XAxis dataKey="name" stroke="gray" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
              <Tooltip />
              <Area type="monotone" dataKey="Total" stroke="#48bb78" fillOpacity={1} fill="url(#total)" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </ResponsiveContainer>
    
        </div>
    )

    }
export default Chart ;