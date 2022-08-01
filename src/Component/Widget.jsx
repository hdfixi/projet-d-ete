import React from "react";
import img2 from '../images/user.png';
import img3 from '../images/ads.png';
import img4 from '../images/comments.png';
import img5 from '../images/occupation.png';



const Widget = ({type}) => {
    let data;
    const number = 12000 ;
    const pour = 22;

    switch(type){
        case "user":
            data ={
                title:"USERS",
                link:"See all users",
                icon:<img src={img2} className="icon" style={{backgroundColor:"rgba(255,0,0,0.2)"}}/>
            };
            break ;
        case "ads":
            data ={
                title:"ADS",
                link:"View all ads",
                icon:<img src={img3} className="icon" style={{backgroundColor:"rgba(200,165,32,0.2)"}}/>
            };
            break ;
        case "comment":
            data ={
                title:"COMMENTS",
                link:"See all comments",
                icon:<img src={img4} className="icon" style={{backgroundColor:"rgba(0,128,0,0.2)"}}/>
            };
            break ;
        case "occupation":
            data ={
                title:"OCCUPATION",
                link:"View all details",
                icon:<img src={img5} className="icon" style={{backgroundColor:"rgba(128,0,128,0.2)"}}/>
            };
            break ;
        default:
            break;
        
    }


    return (
            <div className="widget">
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="counter">{number}</span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="pourcentage">{pour}</div>
                    {data.icon}
                </div>
            </div>
        )
}
export default Widget ;