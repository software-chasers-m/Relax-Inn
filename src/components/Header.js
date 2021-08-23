import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo5.png';
import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: 'rgb(191 130 133 / 56%)' }} expand="lg">
          <Container>
            <Navbar.Brand href="#"> <img src={logo} alt="" style={{ width: '120px', height: '50px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px"}}
                navbarScroll
              >
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/AboutUs">About Us</Nav.Link>
                <Nav.Link to="/Hotels">Hotels</Nav.Link>
              </Nav>
              <Nav className="form-part">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                </Form>
                {
                  this.props.auth0.isAuthenticated ?
                    <Logout /> :
                    <Login />
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div >
    );
  }
}

export default withAuth0(Header)
