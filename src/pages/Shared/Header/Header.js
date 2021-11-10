import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
import logo from '../../../img/logo.png';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <>
        <Navbar
          collapseOnSelect
          expand='md'
          bg='dark'
          variant='dark'
          // fixed='top'
        >
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <img src={logo} alt='' width='150px' />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
              <Nav.Link as={Link} to='/home' className='nav-link'>
                Home
              </Nav.Link>

              {user?.email ? (
                <div className='d-md-flex'>
                  <Nav.Link as={Link} to='/myorder' className='nav-link'>
                    My Order
                  </Nav.Link>
                  <Nav.Link as={Link} to='/manageorder' className='nav-link'>
                    Manage Order
                  </Nav.Link>
                  <Nav.Link as={Link} to='/addservice' className='nav-link'>
                    Add service
                  </Nav.Link>
                  <Button onClick={logOut} className='btn-travelee'>
                    Log Out
                  </Button>
                </div>
              ) : (
                <div className='d-flex'>
                  <Nav.Link
                    as={Link}
                    to='/login'
                    className='btn-travelee rounded text-white'
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to='/register'
                    className='btn-travelee rounded text-white ms-3'
                  >
                    Register
                  </Nav.Link>
                </div>
              )}
              <Navbar.Text>
                <h5 className='ms-2 mt-2'>{user?.displayName}</h5>
              </Navbar.Text>
              <Navbar.Text>
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt='img'
                    width='50px'
                    height='50px'
                    className='rounded-circle ms-2'
                  />
                ) : (
                  ''
                )}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
