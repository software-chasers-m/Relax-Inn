import React, { Component } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
//import data from "../components/data/data.json";
import { BsFillStarFill } from "react-icons/bs";
import './Hotels.css';

export class Hotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsData: this.props.hotelsData,
    }
  }
  render() {
    console.log(this.state.hotelsData);
    return (
      this.state.hotelsData &&
      <Container className="pt-4 mb-4">
        <Row className="g-4" >
          <h2 style={{ fontWeight: 'bold', textAlign: 'center', color: '#9e7b7c' }}>Most Popular Hotels</h2>
          {this.state.hotelsData.map((item, index) => {
            return (<Col xs={12} md={6} lg={4} >
              <Card className="card-container" style={{ width: '320px', height: '350px', borderRadius: '40px', textAlign: 'center' }}>
                <div>
                  <Card.Img style={{ height: '150px' }} variant="top" src={item.img} />
                </div>
                <div>
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{item.name}</Card.Title>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                      <Card.Text className='ml-4'>
                        <div>Price: {item.price ? item.price.price.current : 'TBD'}</div>
                        <div>Rate: 4 <BsFillStarFill /></div>
                      </Card.Text>
                      <Button style={{ backgroundColor: '#9e7b7c', color: '#fff', borderRadius: '25px', cursor: 'pointer', border: 'none' }} id={item.id} onClick={(e) => this.props.handleRoomsData(e)}>Rooms</Button>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </Col>);
          })}
        </Row>
      </Container>
    );
  }
}

export default Hotal;

/*constructor(props) {
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
}*/
