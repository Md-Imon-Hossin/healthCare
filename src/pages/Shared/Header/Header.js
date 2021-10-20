import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const {user,logout} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark"  collapseOnSelect expand="lg" sticky="top">
          <Container>
                    <Navbar.Brand as={HashLink} to="/home">Physical Therapy</Navbar.Brand>                   
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} className='text-white' to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/about">About Us</Nav.Link>                       
                        {
                            user?.email ?
                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                            :
                            <Nav.Link as={HashLink} className='text-white' to="/login">Login</Nav.Link>

                        }
                              <Nav.Link as={HashLink} className='text-white' to="/contact">Contact</Nav.Link>
                       { user?.email && <Navbar.Text>
                            Signed in as: <a href="#login">{ user?.displayName}</a>
              </Navbar.Text>}              
    </Navbar.Collapse>         
          </Container>
        </Navbar>
      </>
    );
};
export default Header;