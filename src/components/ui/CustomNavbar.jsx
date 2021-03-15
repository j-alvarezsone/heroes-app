import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
export const CustomNavbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    history.replace('/login');
  };

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
        <Nav className='ms-auto'>
          <span className='nav-item nav-link ms-3 text-info'>{name}</span>
          <button className='me-3 nav-item nav-link ms-3 btn' onClick={handleLogout}>
            Logout
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
