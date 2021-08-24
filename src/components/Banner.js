import React, { Component } from "react";
import { Carousel, Form, Row, Col, FloatingLabel, Button, Container, Navbar } from "react-bootstrap";
import banner from "../assets/terrace.jpg";
import banner2 from "../assets/view.jpg";
import banner3 from "../assets/pool.jpg";
import "./Banner.css";

export class Banner extends Component {
  render() {
    return (
      <>
        <Container className="container-sm" fluid style={{ padding: '0' }}>
          <Navbar className="navbar navbar-expand-lg navbar-dark" expand="lg" style={{ padding: '0' }}>
            <Navbar.Toggle aria-controls="navbarScroll" style={{ position: 'absolute', top: '50px', left: '45%', zIndex: '5', backgroundColor: '#664949' }} />
            <Navbar.Collapse id="navbarScroll">
              <Form className="form" onSubmit={(e) => this.props.handleFormData(e)} style={{ position: 'absolute', zIndex: '5' }}>
                <Container>
                  <Row className="g-3 p-2 d-flex justify-content-center">
                    <Col md style={{ maxWidth: '300px' }}>
                      <FloatingLabel controlId="location" label="Location">
                        <Form.Control type="text" placeholder="Amman, Istanbul" className="rounded-pill" required />
                      </FloatingLabel>
                    </Col>
                    <Col md style={{ maxWidth: '300px' }}>
                      <FloatingLabel controlId="checkin" label="Check In">
                        <Form.Control type="date" className="rounded-pill" required />
                      </FloatingLabel>
                    </Col>
                    <Col md style={{ maxWidth: '300px' }}>
                      <FloatingLabel controlId="checkout" label="Check Out">
                        <Form.Control type="date" className="rounded-pill" required />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="g-3 p-2 d-flex justify-content-center">
                    <Col md style={{ maxWidth: '300px' }}>
                      <FloatingLabel controlId="sort" label="Sort By">
                        <Form.Select aria-label="Floating label select example" className="rounded-pill">
                          <option value="NO_SORT">NO SORT</option>
                          <option value="PRICE">PRICE</option>
                          <option value="STAR_RATING_HIGHEST_FIRST">STAR RATING HIGHEST FIRST</option>
                          <option value="BEST_SELLER">BEST_SELLER</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col md style={{ maxWidth: '300px' }}>
                      <FloatingLabel controlId="Guest" label="Guests">
                        <Form.Control type="Number" className="rounded-pill" />
                      </FloatingLabel>
                    </Col>
                    <Col md className="mt-4 text-center" style={{ maxWidth: '300px' }}>
                      <Button type="submit" className="rounded-pill search" style={{ width: '150px' }}>Search</Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              style={{ maxHeight: "677px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ backgroundColor: "rgba(0, 0, 0 , 0.7)", padding: "0.5rem" }}>
                Explore your destination with us
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              style={{ maxHeight: "677px" }}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{ backgroundColor: "rgba(0, 0, 0 , 0.7)", padding: "0.5rem" }}>
                Enjoy unforgettable experiences in dream hotels.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              style={{ maxHeight: "677px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 style={{ backgroundColor: "rgba(0, 0, 0 , 0.7)", padding: "0.5rem" }}>
                Enjoy an extraordinary retreat with exclusive offers
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Banner;
