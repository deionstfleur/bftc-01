import React, {Component} from 'react'
import '../Navbar/index.css'
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
      <Navbar expand="lg" light bg="light">
      <Navbar.Brand class="hack" href="#">
        
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
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item dropdown>
            <Link style={{color: 'black', textDecoration: 'none'}}  to="/page-3">
               <Nav.Link>Merch</Nav.Link>
            </Link>
            {/* <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu> */}
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>Disabled</Nav.Link>
          </Nav.Item> */}
          <Button outline success my="2 sm-0">Subscribe</Button>
        </Form>
      </Collapse>
    </Navbar>
 
    )
}

export default Header
