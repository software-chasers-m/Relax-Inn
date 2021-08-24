import React, { Component } from "react";
// import data1 from "../components/data/room.json";
import { Button, Container, Row, Col, Badge } from "react-bootstrap";
import {
  FaUtensils,
  FaWifi,
  FaGlassMartiniAlt,
  FaConciergeBell,
  FaWind,
  FaBinoculars
} from "react-icons/fa";
import noImage from '../assets/aqaba1.jpg';

export class Rooms extends Component {
  render() {
    return (
      this.props.roomsData.length > 0 &&
      <>
        <div style={{ backgroundColor: '#FFE3E3' }} className="pb-3">
          <div>
            <img src={this.props.hotelImage} alt="hotelImage" style={{ width: '100%', height: '400px' }} />
            <h2 className="mx-auto text-center bg-dark text-white rounded-3 opacity-75 p-3" style={{ maxWidth: '500px', position: 'relative', top: "-250px" }}>
              {this.props.hotelName}
            </h2>
            <h3 className="mx-auto text-center" style={{ position: 'relative', top: "-40px", fontWeight: 'bold' }}>
              Services In All Our Hotels
            </h3>
            <Container className="bg-dark text-white rounded-3 opacity-75 mb-5" style={{ maxWidth: '600px' }}>
              <Row className="p-2 d-flex justify-content-center">
                <Col className="mx-5">
                  <FaWifi />
                  <span >  Wi-Fi</span>
                </Col>
                <Col className="mx-5">
                  <FaUtensils />
                  <span >  Breakfast</span>
                </Col>
              </Row>
              <Row className="p-2 d-flex justify-content-center">
                <Col className="mx-5">
                  <FaGlassMartiniAlt />
                  <span >  Mini Bar</span>
                </Col>
                <Col className="mx-5">
                  <FaConciergeBell />
                  <span >  Room Service</span>
                </Col>
              </Row>
              <Row className="p-2 d-flex justify-content-center">
                <Col className="mx-5">
                  <FaWind />
                  <span >  Air Conditioner</span>
                </Col>
                <Col className="mx-5">
                  <FaBinoculars />
                  <span >  Great View</span>
                </Col>
              </Row>
            </Container>
          </div >
          <Container style={{ maxWidth: '900px' }}>
            {this.props.roomsData.map((el, index) => {
              return (
                <div key={index} className="card mb-3" style={{ width: '100%' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      {el.images.length ?
                        <img src={el.images[0].fullSizeUrl} className="img-fluid rounded-start" alt="..." />
                        : <img src={noImage} className="img-fluid rounded-start" alt="..." />
                      }
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{el.roomName}</h5>
                        {el.maxOccupancy.length ?
                          <p className="card-text">
                            Max children : {el.maxOccupancy.messageChildren}<br></br>
                            {el.maxOccupancy.messageTotal}
                          </p>
                          : <p className="card-text">Max children : (including up to 3 children)</p>
                        }
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            {Number(this.props.price) ? (<>Price: &nbsp;
                              <Badge className="bg-warning mt-4" text="dark">
                                ${Number(this.props.price) + (index * 10)}
                              </Badge><br />
                              Total: &nbsp;${Number(this.props.stayDays) * (Number(this.props.price) + (index * 10))}
                            </>)
                              : 'Price: TBD'
                            }
                          </div>
                          <Button className="mt-3 mx-end rounded-pill" id={el.roomName}
                            value={`$${Number(this.props.price) + (index * 10)}`}
                            onClick={(e) => this.props.addToCart(e)}
                          >Book Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Container>
        </div>
      </>
    )
  }
}

export default Rooms;

