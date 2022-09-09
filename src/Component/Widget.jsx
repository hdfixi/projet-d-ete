import { useEffect, useState } from "react";
import img2 from '../images/user.png';
import img3 from '../images/ads.png';
import img4 from '../images/comments.png';
import img5 from '../images/occupation.png';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase-config';
import {Link} from "react-router-dom";

const Widget = ({type}) => {

    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);

    let data;

    switch(type){
        case "user":
            data ={
                title:"USERS",
                linkLabel:"See all users",
                link:"/users" ,            
                icon:<img src={img2} className="icon" style={{backgroundColor:"rgba(255,0,0,0.2)"}}/>,
                query:"users"
            };
            break ;
        case "ads":
            data ={
                title:"ADDS",
                linkLabel:"View all ads",
                link:"/ads",
                icon:<img src={img3} className="icon" style={{backgroundColor:"rgba(200,165,32,0.2)"}}/>,
                query:"adds"
            };
            break ;
        case "comment":
            data ={
                title:"COMMENTS",
                linkLabel:"See all comments",
                link:"/comments",
                icon:<img src={img4} className="icon" style={{backgroundColor:"rgba(0,128,0,0.2)"}}/>,
                query:"comments"
            };
            break ;
        case "occupation":
            data ={
                title:"OCCUPATION",
                linkLabel:"View all details",
                link:"/occupation",
                icon:<img src={img5} className="icon" style={{backgroundColor:"rgba(128,0,128,0.2)"}}/>,
                query:"categories"
            };
            break ;
        default:
            break;
        
    }
    
    useEffect(() => {
        const fetchData = async () => {
          const today = new Date();
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

    
          const lastMonthQuery = query(
            collection(db, data.query),
            where("Timestamp", "<=", today),
            where("Timestamp", ">", lastMonth)
          );
          const prevMonthQuery = query(
            collection(db, data.query),
            where("Timestamp", "<=", lastMonth),
            where("Timestamp", ">", prevMonth)
          );
          const totalMonthQuery = query(
            collection(db, data.query),
          );
    
          const lastMonthData = await getDocs(lastMonthQuery);
          const prevMonthData = await getDocs(prevMonthQuery);
          const totalMonthData = await getDocs(totalMonthQuery);
          
      
          setAmount(totalMonthData.docs.length);
          setDiff(
            ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
              100
          );
        };
        fetchData();
      }, []); 
      
    return (
        <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {amount}
          </span>
          
          <Link to={data.link}  style={{textDecoration :'none'}}>
             <span className="link">{data.linkLabel}</span>
          </Link>
          
        </div>
        <div className="right">
          <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
            {diff} %
          </div>
          {data.icon}
        </div>
        
      </div>
        )
}
export default Widget ;