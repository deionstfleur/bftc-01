import React, {useState} from 'react'
import '../Navbar/index.css'
import Logo from '../../assets/logo.png'
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import {Link} from 'react-router-dom'







const Header = () => {

  // const [navOpen, setNavOpen] = useState(true)

  // function openNav() {
  //   setNavOpen(true);
  // }
    
  // function closeNav() {
  //   setNavOpen(false);
  // }

  return (
    <>

{/* <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav()}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<span style={{fontSize: 30, cursor: 'pointer'}} onClick={openNav()}>&#9776; open</span> */}


      <Navbar expand="lg" light bg="dark">
      <Navbar.Brand class="hack" to="/">
        <Link to="/" style={{cursor: 'pointer', display: 'flex', textDecoration: 'none'}} className="logo">
          <img src={Logo} height="50" />
      <span>    <p style={{textDecoration: 'none', color: '#fff', color: 'red', position: 'relative', left: '2%', top: '20%', zIndex: 100, fontWeight: 'bold'}}>BFTC</p> </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarSupportedContent" />
      <Collapse navbar id="navbarSupportedContent">
        <Navbar.Nav mr="auto">
          <Nav.Item active>
            <Link style={{color: 'black', textDecoration: 'none'}}  to="/">
               <Nav.Link>BFTC</Nav.Link>
            </Link>
          </Nav.Item>
       
       
          
        </Navbar.Nav>
        <Form inline my="2 lg-0">
       
          <Nav.Item>
            <Link style={{color: 'black', textDecoration: 'none'}} to="/About">
              <Nav.Link style={{color: 'white'}}>About</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item dropdown>
            <Link style={{color: 'black', textDecoration: 'none'}}  to="/page-3">
               <Nav.Link style={{color: 'white'}}>Merch</Nav.Link>
            </Link>
            {/* <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu> */}
          </Nav.Item>
          <Nav.Item>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/Playlists">
                  <Nav.Link style={{color: 'white'}}>Playlists</Nav.Link>
              </Link>
          </Nav.Item>
          <Nav.Item>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/Browse-Episodes">
                  <Nav.Link style={{color: 'white'}}>Episodes</Nav.Link>
              </Link>
          </Nav.Item>
          <Link to="/Contact" style={{textDecoration: 'none'}}>
              <Button outline success my="2 sm-0">Subscribe</Button>
          </Link>
        </Form>
      </Collapse>
    </Navbar>
 </>
    )
}

export default Header
