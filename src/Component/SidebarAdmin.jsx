import React from "react";



 const SidebarAdmin = () => {
    return (
        <div className="sidebar">
            <div className="top"><span className="logo">Nom de Site</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <span >Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <span >Ads</span>
                    </li>
                    <li>
                        
                        <span >Comments</span>
                    </li>
                    <li>
                        <span>Occupation</span>
                    </li>
                    <p className="title">COLOR OPTION</p>
                </ul>
                
            </div>
                
            
        </div>
    )
 }
 export default SidebarAdmin ;