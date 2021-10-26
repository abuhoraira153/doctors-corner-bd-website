import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
    <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand href="#home"><h2>Doctors Corner</h2></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} to="/home#aboutUs">About Us</Nav.Link>
        <Nav.Link as={HashLink} to="/home#whyChoose">Why Choose?</Nav.Link>
        <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        {user?.email ? <Button onClick = {logOut} variant = "light"> Log Out </Button>
        :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        }
        <Navbar.Text>
          Signed in: <a href="#login">{user?.displayName}</a>
        </Navbar.Text>
      </Navbar.Collapse>
      </Container>
    </Navbar>
</>
       );
};

export default Header;