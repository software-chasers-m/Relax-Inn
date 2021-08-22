import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./Header.css";
export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: ' rgb(191 130 131 / 34%)' }} expand="lg">
          <Container>
            <Navbar.Brand href="#">Relax Inn</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
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
                <Button variant="light" className="login ">
                  {
                    this.props.auth0.isAuthenticated ?
                      <Logout /> :
                      <Login />
                  }
                 
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header)
