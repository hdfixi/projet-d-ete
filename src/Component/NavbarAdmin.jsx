import React from 'react';
import img1 from '../images/search.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarAdmin = () => {
    return(
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" placeholder='Search..' />
                    <img src={img1} alt="" className='imgsearch' />     
                </div>
                <div className='profile'>
                    <div className='item'> 
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Edit profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                LogOut
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavbarAdmin ;
