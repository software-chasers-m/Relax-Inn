import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo5.png";
export class Footer extends Component {
  render() {
    return (
      <Navbar
        variant="dark"
        style={{ backgroundColor: "#F6E6CB" }}
        className="justify-content-center"
      >
        <Container className="mx-auto text-center" style={{ display: 'flex', flexDirection: 'column' }}>
          <Nav activeKey="/home" >
            <Nav.Item style={{ fontWeight: '500', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "120px",
                    height: "50px",
                    color: "rgb(191 130 131 / 200%)",
                  }}
                />
              </Navbar.Brand>
              <p>
                RealxInn.com is part of Booking Holdings Inc, the world leader
                in online travel and related services.
              </p>
              <p style={{ marginTop: '10px', fontSize: '12px' }}>Copyright © 2021 RealxInn.com™. All rights reserved.</p>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default Footer;
