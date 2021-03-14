import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
export const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Link className='ms-3 navbar-brand' to='/'>
        Asociaciones
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink activeClassName='active' className='nav-item nav-link ms-3' exact to='/marvel'>
            Marvel
          </NavLink>

          <NavLink activeClassName='active' className='nav-item nav-link ms-3' exact to='/dc'>
            DC
          </NavLink>

          <NavLink activeClassName='active' className='nav-item nav-link ms-3' exact to='/search'>
            Search
          </NavLink>
        </Nav>
        <Nav className='navbar-collapse collapse w-100 order-3 dual-collapse2 '>
          <NavLink activeClassName='active' className='me-3 nav-item nav-link ms-3 ms-auto' exact to='/login'>
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
