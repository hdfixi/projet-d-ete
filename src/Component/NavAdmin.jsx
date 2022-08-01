import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavAdmin() {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  return (
    <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Nom de site</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
            <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className='title'>
            <Offcanvas.Title>Nom de Site</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='navBody'>
          <br/>
            <a href='#'>Ads</a>
            <br/>
            <br/>
            <a href='#'>Comments</a>
            <br/>
            <br/>
            <a href='#'>Occupation</a>
          </Offcanvas.Body>
        </Offcanvas>
        
              <Offcanvas.Body className='navbar'>
                <Button variant="primary" onClick={handleShow} className='launchButton'>
                  ----
                </Button>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      LogOut
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavAdmin;