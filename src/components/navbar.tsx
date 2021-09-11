import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/fav.png';
import { Style } from '../components/topBar';
import { theme } from '../styles/theme';

export default function RCom() {
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
}
