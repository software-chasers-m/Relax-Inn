import React, { Component } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./Cards.css";
import axios from "axios";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomData: [],
    }
  }
  componentDidMount = () => {
    axios.get('https://relax-inn.herokuapp.com/storeData')
      .then(res => {
        this.setState({
          randomData: res.data,
          first: first,
          second: second,
          third: third,
        })
      })
    let first = Math.floor(Math.random() * (25 + 1));
    let second = Math.floor(Math.random() * (25 + 1));
    while (first === second) {
      second = Math.floor(Math.random() * (25 + 1));
    }
    let third = Math.floor(Math.random() * (25 + 1));
    while (first === third || second === third) {
      third = Math.floor(Math.random() * (25 + 1));
    }
    this.setState({
      first: first,
      second: second,
      third: third,
    })
  }
  render() {
    return (
      <div className="m-4">
        <Container>
          <h2 className="mx-auto text-center">Luxury Hotels For You</h2>
          <CardGroup>
            <Card
              className="m-2 card"
              style={{ borderRadius: "15px 15px 0 0" }}
            >
              <Card.Img
                variant="top"
                src={this.state.randomData[this.state.first].img}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <Card.Body>
                <Card.Title>{this.state.randomData[this.state.first].hotelName}</Card.Title>
                <Card.Text>
                  The five star deluxe {this.state.randomData[this.state.first].hotelName} offers contemporary
                  design and unparalleled views of the stunning Amman hills
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>
                  {this.state.randomData[this.state.first].address}
                </small>
              </Card.Footer>
            </Card>
            <Card
              className="m-2 card"
              style={{ borderRadius: "15px 15px 0 0" }}
            >
              <Card.Img
                variant="top"
                src={this.state.randomData[this.state.second].img}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <Card.Body>
                <Card.Title>{this.state.randomData[this.state.second].hotelName}</Card.Title>
                <Card.Text>
                  Overlooking the Sea, this beach resort offers 5 different
                  dining outlets and an outdoor pool bordering white sandy
                  beaches. Its modern designs add to the tranquillity of the
                  surroundings.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>
                  {this.state.randomData[this.state.second].address}
                </small>
              </Card.Footer>
            </Card>
            <Card
              className="m-2 card"
              style={{ borderRadius: "15px 15px 0 0" }}
            >
              <Card.Img
                variant="top"
                src={this.state.randomData[this.state.third].img}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <Card.Body>
                <Card.Title>{this.state.randomData[this.state.third].hotelName}</Card.Title>
                <Card.Text>
                  This {this.state.randomData[this.state.third].starRating}-star hotel offers comfortable rooms, Wi-Fi for an additional fee and free parking.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>
                  {this.state.randomData[this.state.third].address}
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
  }
}

export default Cards;
