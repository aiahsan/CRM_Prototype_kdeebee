import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import Icon from '../icons/icons';
import logo from '../images/fav.png';
import { css, cx } from '@emotion/css';
import { Style } from '../components/topBar';
import avt from '../images/image 10.png';

export default () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-dark1' variant='dark'>
      <Navbar.Brand href='#home'>
        {' '}
        <img src={logo} alt='' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Opportunities</Nav.Link>
          <Nav.Link href='#pricing'>Contacts</Nav.Link>
          <Nav.Link href='#pricing'>Library</Nav.Link>
          <input
            placeholder='Search or jump to...'
            className={Style.anksdvajewe}
          />
        </Nav>
        <Nav>
          <div className={Style.kandvseriwe}></div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
