import React, { Component } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./Cards.css";
import imgCard from "../assets/fairmont1.jpg";
import imgCard1 from "../assets/aqaba1.jpg";
import imgCard2 from "../assets/four.jpg";
export class Cards extends Component {
  render() {
    return (
      <div className="m-4">
        <Container>
          <h2 className="mx-auto text-center">Luxury Hotels in Jordan</h2>
          <CardGroup>
            <Card
              className="m-2 card"
              style={{ borderRadius: "15px 15px 0 0" }}
            >
              <Card.Img
                variant="top"
                src={imgCard}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <Card.Body>
                <Card.Title>Fairmont Amman</Card.Title>
                <Card.Text>
                  the five star deluxe Fairmont Amman hotel offers contemporary
                  design and unparalleled views of the stunning Amman hills
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Beirut Street, Fifth Circle 6, 6, Amman, 11183, Jordan
                </small>
              </Card.Footer>
            </Card>
            <Card
              className="m-2 card"
              style={{ borderRadius: "15px 15px 0 0" }}
            >
              <Card.Img
                variant="top"
                src={imgCard1}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <Card.Body>
                <Card.Title>Kempinski Hotel Aqaba</Card.Title>
                <Card.Text>
                  Overlooking the Red Sea, this beach resort offers 5 different
                  dining outlets and an outdoor pool bordering white sandy
                  beaches. Its modern designs add to the tranquillity of the
                  surroundings.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  King Hussein Street, 77110 Aqaba, Jordan
                </small>
              </Card.Footer>
            </Card>
            <Card
              className="m-2 card"
              style={{ borderRadius: "15px 15px 0 0" }}
            >
              <Card.Img
                variant="top"
                src={imgCard2}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <Card.Body>
                <Card.Title>Four Seasons Hotel Amman</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the f.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  5th Circle, Al-Kindi Street, 11195 Amman, Jordan
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
