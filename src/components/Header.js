import React, { Component } from 'react'
import { Nav, DropdownButton, Navbar, Container, Button, Dropdown } from 'react-bootstrap'
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';
export class Header extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">logo and the to link to home page </Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <Navbar.Brand href="#home">page name </Navbar.Brand>
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="dark"
            menuVariant="dark"
            title="name of page"
            className="mt-2"
          >
            <Dropdown.Item href="#/action-2"> <li><a href="/">Home</a></li></Dropdown.Item>
            <Dropdown.Item href="#/action-3">   <li><a href="/about">About us</a></li></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4"><li><a href="/contact-us">Contact us</a></li></Dropdown.Item>
          </DropdownButton>

            {
          this.props.auth0.isAuthenticated ?
            <Logout /> :
            <Login />
        }
        


        </Container>
      </Navbar>
    );

  }
};

export default withAuth0(Header)