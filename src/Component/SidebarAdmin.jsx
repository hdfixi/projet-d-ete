import React from "react";
import {Link} from "react-router-dom";


 const SidebarAdmin = () => {
    function LogOut(){
        if (window.confirm("Are you sure you wanted to delete category")){
            localStorage.clear();
        }
        
    }
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration :'none'}}>
                    <span className="logo">Lamadmin</span>
                </Link>
            </div>
            
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration :'none'}}>
                        <li>
                            <span >Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/users" style={{textDecoration :'none'}}>
                        <li>
                            <span >Users</span>
                        </li>
                    </Link>
                    <Link to="/ads" style={{textDecoration :'none'}}>
                        <li>
                            <span >Ads</span>
                        </li>
                    </Link>
                    <Link to="/occupation" style={{textDecoration :'none'}}>
                        <li>
                            <span>Occupation</span>
                        </li>
                    </Link>
                    <Link to="/comments" style={{textDecoration :'none'}}>
                        <li>
                            <span>Comments</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <Link to="/profile" style={{textDecoration :'none'}}>
                        <li>
                            <span></span>
                        </li>
                    </Link>
                    <Link to="/login" style={{textDecoration :'none'}}>
                        <li>
                            <span onClick={LogOut}>LogOut</span>
                        </li>
                    </Link>
                    
                </ul>
                
            </div>
                
            
        </div>
    )
 }
 export default SidebarAdmin ;