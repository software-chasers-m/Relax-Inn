import React, { Component } from "react";
import { Card, Container, Row, Col, Button} from "react-bootstrap";
import data from "../components/data/data.json";
import { BsFillStarFill } from "react-icons/bs";
import './Hotels.css';

export class Hotal extends Component {
  render() {
    return (
      <Container>
      <Row className="g-4">
      {data.map((item, index) => {
        return(<Col xs={12} md={6} lg={4}>
          <Card style={{width: '300px', height: '350px'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Price: {item.price? item.price.price.current : 'TBD'}
              </Card.Text>
              <Button>Rooms</Button>
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

