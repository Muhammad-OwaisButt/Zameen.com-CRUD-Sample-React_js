import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar style={{padding:"5px", paddingLeft:"30px"}} bg="Light" variant="light">
        <div className='container-fluid' >
          <Navbar.Brand>
            <Link to="/"><img src='./images/logo.png'  width={150} alt='Brandimg'/></Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{color: 'black', textDecoration: 'none'}} to="/properties">PROPERTIES</Link>
            <Link style={{color: 'black', marginLeft: '12px', textDecoration: 'none'}} to="/addproperty">ADD PROPERTIES</Link>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}

export default Header;