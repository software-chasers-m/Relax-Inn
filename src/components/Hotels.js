import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import data from "../components/data/data.json";
import { BsFillStarFill } from "react-icons/bs";
import './Hotels.css';

export class Hotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsData: this.props.hotelsData
    }
  }
  render() {
    console.log(this.state.hotelsData);
    return (
      this.state.hotelsData &&
      <Container>
        <Row className="g-4">
          {this.state.hotelsData.map((item, index) => {
            return (<Col xs={12} md={6} lg={4}>
              <Card style={{ width: '300px', height: '350px' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Price: {item.price ? item.price.price.current : 'TBD'}
                  </Card.Text>
                  <Button id={item.id} onClick={(e) => this.props.handleRoomsData(e)}>Rooms</Button>
                  <BsFillStarFill />
                </Card.Body>
              </Card>
            </Col>);
          })}
        </Row>
      </Container>
    );
  }
}

export default Hotal;

