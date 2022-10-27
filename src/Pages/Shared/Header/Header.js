import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    return (
        <>
        {['xxl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid className='mx-3' >
              <Link className='text-decoration-none' to={'/'}>
                <Navbar.Brand className='company-logo d-md-block d-none'>
                  <Image src='https://brighteducationbd.com/wp-content/uploads/2022/04/logo-22.png'></Image>
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="text-none justify-content-end flex-grow-1 pe-3">
                    <Nav.Link><Button>Dark</Button></Nav.Link>
                    <Nav.Link ><Link className='text-decoration-none' to={"/home"}>Home</Link></Nav.Link>
                    <Nav.Link ><Link className='text-decoration-none' to={"/course"}>Course</Link></Nav.Link>
                    <Nav.Link ><Link className='text-decoration-none' to={"/faq"}>FAQ</Link></Nav.Link>
                    <Nav.Link ><Link className='text-decoration-none' to={"/blogs"}>Blogs</Link></Nav.Link>
                    <Nav.Link ><Link className='text-decoration-none' to={"/login"}>Login</Link></Nav.Link>
                    <Nav.Link ><Link className='text-decoration-none' to={"/register"}>Register</Link></Nav.Link>
                    <FaUserCircle></FaUserCircle>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
};

export default Header;