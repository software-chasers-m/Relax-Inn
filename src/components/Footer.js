import React, { Component } from 'react'
import { Nav, Navbar,Container } from 'react-bootstrap'
import logo from '../assets/logo5.png'
export class Footer extends Component {

    render() {
        return (
            <Navbar  bg="rgba(191, 130, 131, 0.34)" variant="dark"style={{ backgroundColor: ' rgb(191 130 131 / 34%)' }} className="justify-content-center">
          <Container>
                    <Nav className="flex-column" activeKey="/home">
                        <Nav.Item>
                            <p style={{ color: '#b04a8e' }}>Copyright © 2021 RealxInn.com™. All rights reserved.
                            </p>
                        </Nav.Item>
                        <Nav.Item>
                            <p  style={{ color: '#b04a8e' }}>RealxInn.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
                        </Nav.Item>
                        <Nav.Item>
                            <Navbar.Brand href="#"> <img src={logo} alt="" style={{ width: '120px', height: '50px' ,color: 'rgb(191 130 131 / 200%)' }} /></Navbar.Brand>
                        </Nav.Item>
                    </Nav>
                    </Container>
            </Navbar>

        );

    }
};

export default Footer
