import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import banner from "../assets/terrace.jpg";
import banner2 from "../assets/view.jpg";
import banner3 from "../assets/pool.jpg";
import { Button } from "react-bootstrap";
import "./Banner.css";
export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };
  render() {
    return (
      <div className="search-container">
        {this.state.isActive ? (
          <>
            <Button onClick={this.handleHide} 
            className="serarch-dates"
            variant='light'>
              Hide
            </Button>
          </>
        ) : (
          <>
            <Button onClick={this.handleShow} 
            className="serarch-dates"
            variant='light'>
              Search Date
            </Button>
          </>
        )}

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              style={{ maxHeight: "580px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{backgroundColor: "rgba(0, 0, 0 , 0.7)", padding: "0.5rem" }}>
                Explore your destination with us
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              style={{ maxHeight: "580px" }}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{backgroundColor: "rgba(0, 0, 0 , 0.7)", padding: "0.5rem" }}>
                Enjoy unforgettable experiences in dream hotels.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              style={{ maxHeight: "580px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 style={{backgroundColor: "rgba(0, 0, 0 , 0.7)", padding: "0.5rem" }}>
                Enjoy an extraordinary retreat with exclusive offers
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
