import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <>
      <Navbar bg="light" expand="md" className="shadow-sm" fixed="top">
        <Navbar.Brand href="">HUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink tag={Link} to="/plants">Plants</NavLink>
            <NavLink tag={Link} to="/weather">Weather</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation